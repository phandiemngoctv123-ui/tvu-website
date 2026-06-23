// Đóng/Mở cửa sổ trò chuyện Chatbot
function toggleChat() {
    const chatWindow = document.getElementById("chatWindow");
    if (chatWindow.style.display === "none" || chatWindow.style.display === "") {
        chatWindow.style.display = "flex";
    } else {
        chatWindow.style.display = "none";
    }
}

// Lắng nghe sự kiện gõ nút Enter từ bàn phím
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

// Xử lý gửi tin nhắn của người dùng và phản hồi tự động của Robot
function sendMessage() {
    const inputField = document.getElementById("chatInput");
    const queryText = inputField.value.trim();
    if (queryText === "") return;

    // 1. Hiển thị tin nhắn người dùng lên màn hình chat
    appendMessage(queryText, "user");
    inputField.value = "";

    // Giả lập thời gian suy nghĩ của Chatbot trong vòng 0.5 giây để tăng tính tự nhiên
    setTimeout(() => {
        const response = processNLP(queryText);
        appendMessage(response, "bot");
    }, 500);
}

// Thêm thẻ div tin nhắn vào khung Chat Logs
function appendMessage(text, sender) {
    const chatLogs = document.getElementById("chatLogs");
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("chat-msg", sender);
    msgDiv.innerText = text;
    chatLogs.appendChild(msgDiv);
    chatLogs.scrollTop = chatLogs.scrollHeight; // Cuộn tự động xuống tin nhắn mới nhất
}

// Bộ xử lý logic nhận diện Ngôn ngữ tự nhiên (NLP Engine) dựa trên từ khóa cốt lõi
function processNLP(text) {
    const clearText = text.toLowerCase();

    // Duyệt qua tất cả các kịch bản Q&A mẫu để đối sánh khớp thực thể/ý định
    for (let scenario of CHATBOT_DB.qa_scenarios) {
        for (let keyword of scenario.sample_questions) {
            if (clearText.includes(keyword)) {
                return scenario.response_text;
            }
        }
    }
    
    // Nếu không khớp từ khóa nào, trả về câu thoại Fallback mặc định
    return CHATBOT_DB.fallback;
}

// Hàm xử lý Bật/Tắt Menu thả dọc trên môi trường di động
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
}