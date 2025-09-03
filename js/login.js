document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const inputUsername = document.getElementById("login-username").value.trim();
        const inputPassword = document.getElementById("login-password").value;
        const errorDiv = document.getElementById("loginError");

        let users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(u => u.username === inputUsername && u.password === inputPassword);

        if (user) {
            errorDiv.textContent = "";
            localStorage.setItem("currentUser", JSON.stringify(user));
            localStorage.setItem("loggedInUser", user.username); // để chỗ "xin chào" dùng
            alert("Đăng nhập thành công!");
            window.location.href = "final_internship.html";
        } else {
            errorDiv.textContent = "Tên đăng nhập hoặc mật khẩu không đúng.";
        }
    });
});
// Toggle hiện/ẩn mật khẩu
document.addEventListener("DOMContentLoaded", function () {
    const toggleIcons = document.querySelectorAll(".toggle-password");
    toggleIcons.forEach(icon => {
        const input = document.getElementById(icon.dataset.target);
        icon.addEventListener("mousedown", () => {
            input.type = "text";
            icon.classList.remove("bi-eye");
            icon.classList.add("bi-eye-slash");
        });
        ["mouseup", "mouseleave"].forEach(evt => {
            icon.addEventListener(evt, () => {
                input.type = "password";
                icon.classList.remove("bi-eye-slash");
                icon.classList.add("bi-eye");
            });
        });
    });
});
