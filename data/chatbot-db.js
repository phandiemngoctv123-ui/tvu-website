// Cơ sở dữ liệu tri thức tuyển sinh Đại học Trà Vinh năm 2026
const CHATBOT_DB = {
    intents: [
        { intent_id: 1, intent_name: "#hoi_nganh_moi", description: "Hỏi về các ngành học mới mở năm 2026" },
        { intent_id: 2, intent_name: "#hoi_hoc_phi", description: "Hỏi về chính sách học phí, miễn giảm học phí" },
        { intent_id: 3, intent_name: "#hoi_kiem_dinh", description: "Hỏi về các ngành đạt chuẩn kiểm định quốc tế" },
        { intent_id: 4, intent_name: "#hoi_lich_su", description: "Hỏi về mốc thời gian thành lập trường" },
        { intent_id: 5, intent_name: "#hoi_hoc_bong_nu_sinh", description: "Hỏi về học bổng cho nữ sinh khối kỹ thuật" }
    ],
    entities: {
        nganh_hoc: [
            { value: "Tâm lý học", synonyms: ["tam ly", "nganh tam ly học"] },
            { value: "Công nghệ nông nghiệp", synonyms: ["nông nghiệp công nghệ cao", "cong nghe nong nghiep"] },
            { value: "Trí tuệ nhân tạo", synonyms: ["ai", "tri tue nhan tao"] },
            { value: "Công nghệ kỹ thuật Cơ điện tử", synonyms: ["co dien tu", "robot", "chế tạo robot"] }
        ],
        kiem_dinh: ["AUN-QA", "ABET", "FIBAA"]
    },
    qa_scenarios: [
        {
            intent_id: 1,
            sample_questions: ["có ngành nào mới", "ngành mới mở năm 2026", "nganh moi"],
            response_text: "Trong kỳ tuyển sinh năm 2026, Đại học Trà Vinh mở thêm 02 ngành đào tạo mới: Tâm lý học và Công nghệ nông nghiệp. Cả 2 ngành này đều thuộc danh mục được miễn 100% học phí năm thứ nhất!"
        },
        {
            intent_id: 2,
            sample_questions: ["miễn học phí", "ngành nào được miễn học phí", "hoc phi"],
            response_text: "Năm 2026, TVU miễn 100% học phí năm nhất cho 13 ngành xu hướng (AI, Cơ điện tử, Công nghệ sinh học, Hóa dược, Tâm lý học, Công nghệ nông nghiệp,...). Ngoài ra, ngành Sư phạm được hỗ trợ theo quy định nhà nước."
        },
        {
            intent_id: 3,
            sample_questions: ["đạt chuẩn quốc tế", "kiểm định quốc tế", "aun qa", "abet", "fibaa"],
            response_text: "Đại học Trà Vinh có 28 chương trình đạt kiểm định quốc tế: ABET (Kỹ thuật, CNTT), FIBAA (Kinh tế, Luật), AUN-QA (Y tế, Nông nghiệp, Ngôn ngữ Anh...)."
        },
        {
            intent_id: 4,
            sample_questions: ["thành lập năm nào", "lịch sử trường", "chuyển thành đại học"],
            response_text: "Trường khởi đầu từ Cao đẳng Cộng đồng (2001), lên Đại học Trà Vinh (2006). Ngày 12/01/2026, Thủ tướng Chính phủ ký Quyết định số 73/QĐ-TTg chính thức chuyển thành Đại học Trà Vinh (mô hình đại học đa ngành)."
        },
        {
            intent_id: 5,
            sample_questions: ["nữ sinh kỹ thuật", "học bổng con gái", "nữ học kỹ thuật"],
            response_text: "TVU cấp học bổng tương đương 50% học phí toàn khóa dành riêng cho sinh viên nữ theo học các nhóm ngành Kỹ thuật Công nghệ (Cơ khí, Ô tô, Điện - Điện tử, Xây dựng...)."
        }
    ],
    fallback: "Đại học Trà Vinh xin chào! Bot chưa hiểu rõ câu hỏi của bạn. Bạn vui lòng nhập từ khóa rõ hơn (ví dụ: 'học phí', 'ngành mới', 'học bổng nữ sinh') hoặc liên hệ Hotline: 0294.3855.246 để gặp tư vấn viên nhé!"
};