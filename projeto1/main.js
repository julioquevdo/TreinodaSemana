// Array de exercícios para cada grupo muscular
const exerciseList = {
    peito: ["Supino reto", "Supino inclinado", "Crossover"],
    costas: ["Barra fixa", "Remada", "Puxada"],
    perna: ["Agachamento", "Leg Press", "Cadeira extensora"],
    triceps: ["Tríceps testa", "Tríceps pulley", "Tríceps corda"],
    biceps: ["Rosca direta", "Rosca alternada", "Rosca martelo"],
    ombro: ["Desenvolvimento", "Elevação lateral", "Remada alta"],
    antebraço: ["Rosca de punho", "Flexão de punho"],
    trapezio: ["Encolhimento", "Remada alta", "Elevação lateral"],
    panturrilha: ["Gêmeos sentado", "Gêmeos em pé"],
    abs: ["Crunch", "Prancha", "Supra"],
    lombar: ["Hiperextensão", "Superman"]
  };
  
  // Função para atualizar a lista de exercícios de acordo com os grupos musculares selecionados
  function updateExerciseList() {
    const dayElement = this.closest(".day");
    const primaryMuscle = dayElement.querySelector(".muscle-group.primary select").value;
    const secondarySelect = dayElement.querySelector(".muscle-group.secondary select");
    const optionalSelect = dayElement.querySelector(".muscle-group.optional select");
  
    // Remove a opção do músculo primário dos selects de músculo secundário e opcional
    [...secondarySelect.options, ...optionalSelect.options].forEach(option => {
      if (option.value === primaryMuscle) {
        option.disabled = true;
      } else {
        option.disabled = false;
      }
    });
  
    // Limpa a lista de exercícios atual
    const exerciseListElement = dayElement.querySelector(".exercise-list");
    exerciseListElement.innerHTML = "<h3>Exercícios:</h3>";
  
    const allExercises = [];
    if (primaryMuscle) {
      allExercises.push(...exerciseList[primaryMuscle]);
    }
    const secondaryMuscle = secondarySelect.value;
    if (secondaryMuscle) {
      allExercises.push(...exerciseList[secondaryMuscle]);
    }
    const optionalMuscle = optionalSelect.value;
    if (optionalMuscle) {
      allExercises.push(...exerciseList[optionalMuscle]);
    }
  
    const exerciseListHTML = allExercises.map(exercise => `<p>${exercise}</p>`).join("");
    exerciseListElement.innerHTML += exerciseListHTML;
  }
  
  // Event listeners para atualizar a lista de exercícios quando os grupos musculares são selecionados
  const muscleGroupSelects = document.querySelectorAll(".muscle-group select");
  muscleGroupSelects.forEach(select => select.addEventListener("change", updateExerciseList));
  