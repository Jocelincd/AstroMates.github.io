/* =========================================================
   ESTRUCTURA Y LÓGICA DE INTERACCIÓN DE ASTROMATES
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    // ----------------------------------------------------
    // 1. RECTA NUMÉRICA INTERACTIVA
    // ----------------------------------------------------
    let valorActual = 0;
    const currentValDisplay = document.getElementById("currentValDisplay");
    const btnLess = document.getElementById("btnLess");
    const btnMore = document.getElementById("btnMore");
    const numberLine = document.getElementById("numberLine");

    function renderizarRecta() {
        if (currentValDisplay) {
            currentValDisplay.innerHTML = `Valor seleccionado: <strong>${valorActual}</strong>`;
        }

        if (numberLine) {
            numberLine.innerHTML = "";
            for (let i = valorActual - 5; i <= valorActual + 5; i++) {
                const tick = document.createElement("div");
                tick.style.display = "inline-block";
                tick.style.margin = "0 10px";
                tick.style.textAlign = "center";
                tick.innerHTML = `<div style="height: 15px; width: 2px; background: ${i === valorActual ? '#0284c7' : '#94a3b8'}; margin: 0 auto;"></div><span style="font-size:12px; color: ${i === valorActual ? '#0284c7' : '#475569'}; font-weight:${i === valorActual ? 'bold' : 'normal'};">${i}</span>`;
                numberLine.appendChild(tick);
            }
        }
    }

    if (btnLess && btnMore) {
        btnLess.addEventListener("click", () => {
            valorActual--;
            renderizarRecta();
        });

        btnMore.addEventListener("click", () => {
            valorActual++;
            renderizarRecta();
        });

        renderizarRecta();
    }

    // ----------------------------------------------------
    // 2. SIMULADOR DE PROPORCIÓN RACIONAL (a/b)
    // ----------------------------------------------------
    const canvasFraction = document.getElementById("fractionCanvas");
    const inputA = document.getElementById("numA");
    const inputB = document.getElementById("denB");
    const colorInput = document.getElementById("circleColor");
    const valA = document.getElementById("valA");
    const valB = document.getElementById("valB");

    function dibujarProporcion() {
        if (!canvasFraction) return;
        const ctx = canvasFraction.getContext("2d");
        const a = parseInt(inputA.value) || 0;
        const b = parseInt(inputB.value) || 1;
        const color = colorInput ? colorInput.value : "#0284c7";

        if (valA) valA.textContent = a;
        if (valB) valB.textContent = b;

        const centerX = canvasFraction.width / 2;
        const centerY = canvasFraction.height / 2;
        const radius = Math.min(centerX, centerY) - 10;

        ctx.clearRect(0, 0, canvasFraction.width, canvasFraction.height);

        // Círculo base
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "#e2e8f0";
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#64748b";
        ctx.stroke();

        // Porción seleccionada
        const porcentaje = Math.min(a / b, 1);
        const endAngle = porcentaje * 2 * Math.PI - Math.PI / 2;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, -Math.PI / 2, endAngle);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();

        // Líneas divisorias
        for (let i = 0; i < b; i++) {
            const angle = (i * 2 * Math.PI) / b - Math.PI / 2;
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(
                centerX + radius * Math.cos(angle),
                centerY + radius * Math.sin(angle)
            );
            ctx.strokeStyle = "#475569";
            ctx.stroke();
        }
    }

    if (canvasFraction && inputA && inputB) {
        inputA.addEventListener("input", dibujarProporcion);
        inputB.addEventListener("input", dibujarProporcion);
        if (colorInput) colorInput.addEventListener("input", dibujarProporcion);

        dibujarProporcion();
    }

    // ----------------------------------------------------
    // 3. SIMULADOR DE ZOOM EN LA RECTA REAL
    // ----------------------------------------------------
    const zoomCanvas = document.getElementById("zoomLineCanvas");
    if (zoomCanvas) {
        const ctx = zoomCanvas.getContext("2d");
        let zoom = 1;
        const centerValue = 1.41421356; // Centrado cerca de √2

        function drawLine() {
            ctx.clearRect(0, 0, zoomCanvas.width, zoomCanvas.height);
            const w = zoomCanvas.width;
            const h = zoomCanvas.height;
            const midY = h / 2;

            // Línea principal
            ctx.beginPath();
            ctx.moveTo(20, midY);
            ctx.lineTo(w - 20, midY);
            ctx.strokeStyle = "#334155";
            ctx.lineWidth = 2;
            ctx.stroke();

            // Rango según zoom
            const range = 2 / zoom;
            const minVal = centerValue - range / 2;
            const maxVal = centerValue + range / 2;

            // Marcas graduadas
            const step = Math.pow(10, Math.floor(Math.log10(range))) / 2;
            const startMark = Math.ceil(minVal / step) * step;

            for (let val = startMark; val <= maxVal; val += step) {
                const x = 20 + ((val - minVal) / (maxVal - minVal)) * (w - 40);

                ctx.beginPath();
                ctx.moveTo(x, midY - 8);
                ctx.lineTo(x, midY + 8);
                ctx.strokeStyle = "#3b82f6";
                ctx.lineWidth = 1.5;
                ctx.stroke();

                ctx.fillStyle = "#1e293b";
                ctx.font = "11px Nunito, sans-serif";
                ctx.textAlign = "center";
                ctx.fillText(val.toFixed(zoom > 10 ? 3 : 1), x, midY + 22);
            }

            // Destacar √2
            const rootX = 20 + ((centerValue - minVal) / (maxVal - minVal)) * (w - 40);
            if (rootX >= 20 && rootX <= w - 20) {
                ctx.beginPath();
                ctx.arc(rootX, midY, 5, 0, Math.PI * 2);
                ctx.fillStyle = "#ef4444";
                ctx.fill();

                ctx.fillStyle = "#ef4444";
                ctx.font = "bold 12px Fredoka, sans-serif";
                ctx.fillText("√2", rootX, midY - 14);
            }

            const zoomDisplay = document.getElementById("zoomLevelDisplay");
            if (zoomDisplay) {
                zoomDisplay.innerHTML = `Nivel de Zoom: <strong>${Math.round(zoom)}x</strong>`;
            }
        }

        const btnIn = document.getElementById("btnZoomIn");
        const btnOut = document.getElementById("btnZoomOut");

        if (btnIn) {
            btnIn.addEventListener("click", () => {
                if (zoom < 100) { zoom *= 1.5; drawLine(); }
            });
        }

        if (btnOut) {
            btnOut.addEventListener("click", () => {
                if (zoom > 1) { zoom /= 1.5; drawLine(); }
            });
        }

        drawLine();
    }

    // ----------------------------------------------------
    // 4. LÓGICA DEL CUESTIONARIO
    // ----------------------------------------------------
    const btnCheck = document.getElementById("btnCheckQuiz");
    const resultBox = document.getElementById("quizResult");

    const answers = { q1: "c", q2: "b", q3: "c" };

    if (btnCheck) {
        btnCheck.addEventListener("click", () => {
            let score = 0;
            const total = Object.keys(answers).length;

            for (let q in answers) {
                const questionCard = document.getElementById(q);
                const selected = document.querySelector(`input[name="${q}"]:checked`);

                if (questionCard) {
                    questionCard.classList.remove("correct-card", "incorrect-card");

                    if (selected && selected.value === answers[q]) {
                        score++;
                        questionCard.classList.add("correct-card");
                    } else {
                        questionCard.classList.add("incorrect-card");
                    }
                }
            }

            if (resultBox) {
                resultBox.style.display = "block";
                if (score === total) {
                    resultBox.style.backgroundColor = "#dcfce7";
                    resultBox.style.color = "#15803d";
                    resultBox.innerHTML = `🎉 ¡Perfecto! Respondiste correctamente ${score} de ${total} preguntas.`;
                } else {
                    resultBox.style.backgroundColor = "#fee2e2";
                    resultBox.style.color = "#b91c1c";
                    resultBox.innerHTML = `💪 Obtuviste ${score} de ${total}. Revisa los puntos en rojo y vuelve a probar.`;
                }
            }
        });
    }

    // ----------------------------------------------------
    // 5. SISTEMA DE COMENTARIOS (SOLO ENVÍO AL BACKEND)
    // ----------------------------------------------------
    const commentForm = document.getElementById("commentForm");

    if (commentForm) {
        commentForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const inputNombre = commentForm.querySelector("input[type='text']");
            const textareaTexto = commentForm.querySelector("textarea");

            if (!inputNombre || !textareaTexto) return;

            // Identificador de la ruta actual para el backend
            const idArticuloActual = window.location.pathname;

            const datos = {
                articulo_id: idArticuloActual,
                nombre: inputNombre.value.trim(),
                texto: textareaTexto.value.trim()
            };

            if (!datos.nombre || !datos.texto) {
                alert("Por favor completa tanto el nombre como el texto del comentario.");
                return;
            }

            try {
                const res = await fetch("/api/comentarios", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(datos)
                });

                if (res.ok) {
                    commentForm.reset();
                    alert("¡Muchas gracias! Tu comentario ha sido enviado correctamente.");
                } else {
                    const errorResponse = await res.json();
                    console.error("Detalle del error desde el servidor:", errorResponse);
                    alert("No se pudo guardar el comentario.");
                }
            } catch (error) {
                console.error("Error de red/conexión:", error);
                alert("No se pudo conectar con el servidor.");
            }
        });
    }

    // Renderizado de fórmulas MathJax (si está cargado)
    if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise();
    }

}); // Cierre correcto de document.addEventListener("DOMContentLoaded")