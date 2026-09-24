// --- F. Evaluador de Variable en Expresión Fija ---
const btnEvaluate = document.getElementById("btnEvaluate");
const xValueInput = document.getElementById("xValueInput");
const evalResultBox = document.getElementById("evalResultBox");
const finalResultDisplay = document.getElementById("finalResultDisplay");
const stepSubstitution = document.getElementById("stepSubstitution");
const stepCalculated = document.getElementById("stepCalculated");

// Definimos la expresión fija de la lección (en formato JS y en LaTeX para renderizado)
const EXPRESION_JS = "2*x - 1";          // Fórmula para el cálculo
const EXPRESION_TEX = "2x - 1";          // Expresión visual en MathJax

if (btnEvaluate && xValueInput && evalResultBox) {
  btnEvaluate.addEventListener("click", () => {
    const xVal = parseFloat(xValueInput.value);

    if (isNaN(xVal)) {
      alert("Por favor, ingresa un número válido para x.");
      return;
    }

    try {
      // 1. Evaluar el valor de la función para el valor de x ingresado
      const evalFunction = new Function("x", `return ${EXPRESION_JS};`);
      const resultado = evalFunction(xVal);

      // Formatear el valor de x si es negativo para colocar paréntesis: (-3)
      const xValFormatted = xVal < 0 ? `(${xVal})` : `${xVal}`;

      // 2. Construir la sustitución en LaTeX
      const pasoSustitucion = `2 \\cdot ${xValFormatted} - 1`;

      // 3. Inyectar el resultado y los pasos
      evalResultBox.classList.remove("eval-error");
      evalResultBox.style.display = "block";
      finalResultDisplay.textContent = Number.isInteger(resultado) ? resultado : resultado.toFixed(2);

      stepSubstitution.innerHTML = `
        <p style="margin-bottom: 0.5rem; color: #475569;">
          Para \\(x = ${xVal}\\), reemplazamos en la expresión \\(${EXPRESION_TEX}\\):
        </p>
        <div style="font-size: 1.3rem; text-align: center; margin: 0.8rem 0;">
          \\[ ${pasoSustitucion} \\]
        </div>
      `;

      stepCalculated.innerHTML = `
        <div style="font-size: 1.3rem; text-align: center; color: #1e3a8a;">
          \\[ = ${resultado} \\]
        </div>
      `;

      // 4. Actualizar MathJax
      if (window.MathJax && window.MathJax.typesetPromise) {
        MathJax.typesetClear([stepSubstitution, stepCalculated]);
        MathJax.typesetPromise([stepSubstitution, stepCalculated]);
      }

    } catch (err) {
      evalResultBox.classList.add("eval-error");
      evalResultBox.style.display = "block";
      finalResultDisplay.textContent = "Error";
      stepSubstitution.innerHTML = "⚠️ Ocurrió un error al procesar el valor.";
      stepCalculated.innerHTML = "";
    }
  });
}
// ----------------------------------------------------
    // 4. LÓGICA DEL CUESTIONARIO
    // ----------------------------------------------------
    const btnCheck = document.getElementById("btnCheckQuiz");
    const resultBox = document.getElementById("quizResult");

    const answers = { q1: "a", q2: "b", q3: "a" };

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
