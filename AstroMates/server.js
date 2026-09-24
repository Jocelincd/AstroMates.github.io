const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// CONTRASEÑA PRIVADA PARA EL PANEL DE ADMINISTRACIÓN
const ADMIN_PASSWORD = "AstroMates2026Admin";

// Middlewares
app.use(cors());
app.use(express.json());

// Servir todos los archivos estáticos desde la raíz del proyecto
app.use(express.static(path.join(__dirname)));

// Base de Datos SQLite
const db = new sqlite3.Database('./comentarios.db', (err) => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err.message);
    } else {
        console.log('Conectado a la base de datos SQLite (comentarios.db).');
    }
});

// Inicialización de la base de datos
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS comentarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            articulo_id TEXT NOT NULL DEFAULT 'desconocido',
            nombre TEXT NOT NULL,
            texto TEXT NOT NULL,
            fecha DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `, (err) => {
        if (err) {
            console.error('Error al verificar/crear la tabla comentarios:', err.message);
        } else {
            console.log('Tabla "comentarios" verificada y lista.');
        }
    });
});

// ----------------------------------------------------
// RUTAS PÚBLICAS (Para tus visitantes)
// ----------------------------------------------------

// Endpoint público GET: Obtener comentarios de un artículo concreto (o todos)
app.get('/api/comentarios', (req, res) => {
    const articulo_id = req.query.articulo_id;

    let sql = 'SELECT * FROM comentarios';
    let params = [];

    if (articulo_id) {
        sql += ' WHERE articulo_id = ?';
        params.push(articulo_id);
    }

    sql += ' ORDER BY fecha DESC';

    db.all(sql, params, (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Endpoint público POST: Guardar comentario de un artículo
app.post('/api/comentarios', (req, res) => {
    const { articulo_id, texto } = req.body;
    const nombre = req.body.nombre || req.body.autor;

    if (!nombre || !texto) {
        return res.status(400).json({ error: 'Nombre y texto son obligatorios.' });
    }

    const articulo = articulo_id || 'general';

    const sql = 'INSERT INTO comentarios (articulo_id, nombre, texto) VALUES (?, ?, ?)';
    db.run(sql, [articulo, nombre, texto], function (err) {
        if (err) {
            console.error('Error al insertar en la base de datos:', err.message);
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({
            id: this.lastID,
            articulo_id: articulo,
            nombre,
            texto,
            fecha: new Date().toISOString()
        });
    });
});

// ----------------------------------------------------
// RUTAS PRIVADAS (Solo para ti)
// ----------------------------------------------------

// Endpoint protegido para obtener comentarios con contraseña
app.get('/api/admin/comentarios', (req, res) => {
    const password = req.headers['x-admin-password'];

    if (password !== ADMIN_PASSWORD) {
        return res.status(401).json({ error: 'Acceso no autorizado. Contraseña incorrecta.' });
    }

    const sql = 'SELECT * FROM comentarios ORDER BY fecha DESC';
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Endpoint protegido para descargar copia de seguridad en CSV (incluye la columna Artículo)
app.get('/api/admin/exportar', (req, res) => {
    const password = req.query.pass;

    if (password !== ADMIN_PASSWORD) {
        return res.status(401).send('Acceso no autorizado.');
    }

    const sql = 'SELECT id, articulo_id, nombre, texto, fecha FROM comentarios ORDER BY fecha DESC';
    db.all(sql, [], (err, rows) => {
        if (err) return res.status(500).send('Error al exportar.');

        let csvContent = 'ID;Articulo;Nombre;Comentario;Fecha\n';
        rows.forEach(r => {
            const textoLimpio = r.texto.replace(/\n/g, ' ');
            csvContent += `${r.id};"${r.articulo_id}";"${r.nombre}";"${textoLimpio}";"${r.fecha}"\n`;
        });

        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
        res.setHeader('Content-Disposition', 'attachment; filename="comentarios_astromates.csv"');
        res.status(200).send('\uFEFF' + csvContent);
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor AstroMates escuchando en http://localhost:${PORT}`);
});