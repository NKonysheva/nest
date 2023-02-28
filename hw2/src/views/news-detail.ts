import { News } from '../api/dto/news.dto';

export const newsDetail = (news: News): string => {
  let html = `<div class="row">
  <div class="card">
    <div class="card-body">
        <h3 class="card-title">${news.name}</h3>
        <div class="card-subtitle mb-2 text-muted">
            Автор: ${news.description}
        </div>
        <div class="card-subtitle mb-2 text-muted">
            Дата создания: ${news.createdAt}
        </div>
        <p class="card-text">${news.text}</p>
    </div>
  `;

  if (news.comments.length === 0) {
    html += emptyComments();
  } else {
    for (const comment of news.comments) {
      html += `   
      <div class="card">        
          <h3 class="card-title">${comment.createdAt}</h3>           
          <p class="card-text">${comment.text}</p>        
      </div>   
      `;
    }
  }

  html += '</div>';
  return html;
};
const emptyComments = () => {
  return `<h1>Комментариев нет.</h1>`;
};
