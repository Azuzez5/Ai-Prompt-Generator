let currentTab = 'solve';
const formArea = document.getElementById('formArea');
const output = document.getElementById('outputPrompt');

setTab('solve');

function setTab(tab){
  currentTab = tab;
  document.querySelectorAll('.tabs button').forEach(b=>b.classList.remove('active'));
  event.target?.classList.add('active');
  renderForm();
}

function renderForm(){
  if(currentTab==='solve'){
    formArea.innerHTML = `
      <div class="field"><label>Môn học</label><input id="subject"></div>
      <div class="field"><label>Trình độ</label><input id="level" placeholder="Cơ bản / Nâng cao"></div>
      <div class="field"><label>Giọng điệu</label><input id="tone" placeholder="Dễ hiểu / Ngắn gọn"></div>
      <div class="field"><label>Đề bài</label><textarea id="text"></textarea></div>
      <button onclick="generateSolve()">Generate</button>
    `;
  }

  if(currentTab==='explain'){
    formArea.innerHTML = `
      <div class="field"><label>Khái niệm</label><input id="concept"></div>
      <div class="field"><label>Trình độ</label><input id="level"></div>
      <div class="field"><label>Giọng điệu</label><input id="tone"></div>
      <button onclick="generateExplain()">Generate</button>
    `;
  }

  if(currentTab==='summarize'){
    formArea.innerHTML = `
      <div class="field"><label>Văn bản</label><textarea id="text"></textarea></div>
      <div class="field"><label>Phong cách</label><input id="style" placeholder="Sơ đồ ý / Bullet"></div>
      <button onclick="generateSummarize()">Generate</button>
    `;
  }

  if(currentTab==='practice'){
    formArea.innerHTML = `
      <div class="field"><label>Chủ đề</label><input id="topic"></div>
      <div class="field"><label>Số câu</label><input id="count" value="10"></div>
      <div class="field"><label>Mức độ</label><input id="level"></div>
      <button onclick="generatePractice()">Generate</button>
    `;
  }

  if(currentTab==='exam'){
    formArea.innerHTML = `
      <div class="field"><label>Môn học</label><input id="subject"></div>
      <div class="field"><label>Số ngày</label><input id="days"></div>
      <div class="field"><label>Mục tiêu</label><input id="goal"></div>
      <button onclick="generateExam()">Generate</button>
    `;
  }
}

function generateSolve(){
  output.value = buildSolve({
    subject: subject.value,
    level: level.value,
    tone: tone.value,
    text: text.value
  });
}

function generateExplain(){
  output.value = buildExplain({
    concept: concept.value,
    level: level.value,
    tone: tone.value
  });
}

function generateSummarize(){
  output.value = buildSummarize({
    text: text.value,
    style: style.value
  });
}

function generatePractice(){
  output.value = buildPractice({
    topic: topic.value,
    count: count.value,
    level: level.value
  });
}

function generateExam(){
  output.value = buildExam({
    subject: subject.value,
    days: days.value,
    goal: goal.value
  });
}

function copyPrompt(){
  navigator.clipboard.writeText(output.value);
  alert('Đã copy prompt!');
}

function clearAll(){
  output.value = '';
}
