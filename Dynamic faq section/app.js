document.getElementById("addFaq").addEventListener("click", function () {
  let questionText = document.getElementById("question").value.trim();
  let answerText = document.getElementById("answer").value.trim();
  if (questionText === "" || answerText === "") {
    alert("Both the fields are required");
    return;
  }
  let faqData = { question: questionText, answer: answerText };
  addFAQItem(faqData);
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
  // editBtn.addEventListener("click", function () {
  //   let newQuestion = prompt("Edit Question:", faqData.question);
  //   let newAnswer = promt("Edit Answer:", faqData.answer);

  //   if (newQuestion && newAnswer) {
  //     question.innerHTML = `${newQuestion} <span>▼</span>`;
  //     answer.textContent = newAnswer;
  //   }
  // });
  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "❌";
  deleteBtn.addEventListener("click", function () {
    faqItem.remove();
  });

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);
  faqItem.appendChild(question);
  // faqItem.appendChild(answer);
  faqItem.appendChild(actions);

  document.getElementById("faqList").appendChild(faqItem);
}
