document.addEventListener("DOMContentLoaded", loadFAQs);

document.getElementById("addFaq").addEventListener("click", function () {
  let questionText = document.getElementById("question").value.trim();
  let answerText = document.getElementById("answer").value.trim();

  if (questionText === "" || answerText === "") {
    alert("Both fields are required!");
    return;
  }

  let faqData = { question: questionText, answer: answerText };
  addFAQItem(faqData);
  saveFAQToLocalStorage(faqData);

  document.getElementById("question").value = "";
  document.getElementById("answer").value = "";
});

function addFAQItem(faqData) {
  let faqItem = document.createElement("div");
  faqItem.classList.add("faq-item");

  let question = document.createElement("div");
  question.classList.add("faq-question");
  question.innerHTML = `${faqData.question} <span>▼</span>`;

  let answer = document.createElement("div");
  answer.classList.add("faq-answer");
  answer.textContent = faqData.answer;

  let actions = document.createElement("div");
  actions.classList.add("actions");

  let editBtn = document.createElement("button");
  editBtn.classList.add("edit-btn");
  editBtn.textContent = "✏️";
  editBtn.addEventListener("click", function () {
    let newQuestion = prompt("Edit Question:", faqData.question);
    let newAnswer = prompt("Edit Answer:", faqData.answer);

    if (newQuestion && newAnswer) {
      question.innerHTML = `${newQuestion} <span>▼</span>`;
      answer.textContent = newAnswer;
      updateFAQInLocalStorage(faqData.question, newQuestion, newAnswer);
    }
  });

  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "❌";
  deleteBtn.addEventListener("click", function () {
    faqItem.remove();
    removeFAQFromLocalStorage(faqData.question);
  });

  question.addEventListener("click", function () {
    answer.classList.toggle("open");
  });

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);
  faqItem.appendChild(question);
  // faqItem.appendChild(answer);
  faqItem.appendChild(actions);
  document.getElementById("faqList").appendChild(faqItem);
}

function saveFAQToLocalStorage(faqData) {
  let faqs = JSON.parse(localStorage.getItem("faqs")) || [];
  faqs.push(faqData);
  localStorage.setItem("faqs", JSON.stringify(faqs));
}

function removeFAQFromLocalStorage(questionText) {
  let faqs = JSON.parse(localStorage.getItem("faqs")) || [];
  faqs = faqs.filter((faq) => faq.question !== questionText);
  localStorage.setItem("faqs", JSON.stringify(faqs));
}

function updateFAQInLocalStorage(oldQuestion, newQuestion, newAnswer) {
  let faqs = JSON.parse(localStorage.getItem("faqs")) || [];
  let faqIndex = faqs.findIndex((faq) => faq.question === oldQuestion);
  if (faqIndex !== -1) {
    faqs[faqIndex].question = newQuestion;
    faqs[faqIndex].answer = newAnswer;
    localStorage.setItem("faqs", JSON.stringify(faqs));
  }
}

function loadFAQs() {
  let faqs = JSON.parse(localStorage.getItem("faqs")) || [];
  faqs.forEach((faq) => addFAQItem(faq));
}
