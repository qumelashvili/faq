const faqContent = [
    {
        question : "How many team members can i invite?",
        answer : "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        key : 1,
    },
    {
        question : "What is the maximum file upload size?",
        answer : "No more than 2GB. All files in your account must fit your allotted storage space.",
        key : 1,
    },
    {
        question : "How do I reset my password?",
        answer : "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        key : 1,
    },
    {
        question : "Can I cancel my subscription?",
        answer : "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        key : 1,
    },
    {
        question : "Do you provide additional support?",
        answer : "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        key : 1,
    },
]

let faqSection = document.querySelector(".faq-container");
for(var content of faqContent){
    let inner = 
    `
        <div class="faq-area">
            <h1 class="faq-question">${content.question}</h1>
            <div class="faq-answer">
            <p>
                ${content.answer}
            </p>
            </div>
        <div>
        <div class="faq-line"></div>
    `
    faqSection.innerHTML += inner;
}

let faqArea = document.querySelectorAll(".faq-area");

for(var question of faqArea){
    question.addEventListener("click", function(){
        this.classList.toggle("active")
    })
}