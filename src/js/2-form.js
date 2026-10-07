const form = document.querySelector(".feedback-form");
const email = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = "feedback-form-state";

const formData = JSON.parse(localStorage.getItem(localStorageKey)) ?? {
  email: "",
  message: "",
};

email.value = formData.email;
textarea.value = formData.message;

form.addEventListener("input", (evt) => {
  const data = {
    email: email.value.trim(),
    message: textarea.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(data));
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  if (!email.value || !textarea.value) {
    alert("Please fill in all fields");
    return;
  }
  console.log(evt.target.elements.email.value);
	console.log(evt.target.elements.message.value);
  localStorage.removeItem(localStorageKey);
  form.reset();
});
