function buildSolve(data){
  return `Bạn là giáo viên môn ${data.subject}.
Hãy giải chi tiết bài sau theo từng bước cho học sinh ${data.level}.
Giải thích dễ hiểu, rõ ràng và theo giọng điệu ${data.tone}.

Đề bài:
${data.text}`;
}

function buildExplain(data){
  return `Hãy giải thích khái niệm "${data.concept}" cho học sinh ${data.level}.
Trình bày ${data.tone}, có ví dụ và lỗi sai thường gặp.`;
}

function buildSummarize(data){
  return `Hãy tóm tắt nội dung sau theo phong cách ${data.style}, ngắn gọn và dễ học:

${data.text}`;
}

function buildPractice(data){
  return `Hãy tạo ${data.count} câu hỏi luyện tập về chủ đề "${data.topic}".
Mức độ: ${data.level}.
Có đáp án và giải thích.`;
}

function buildExam(data){
  return `Tôi có ${data.days} ngày để ôn thi môn ${data.subject}.
Mục tiêu: ${data.goal}.
Hãy lập kế hoạch học chi tiết theo từng ngày.`;
}
