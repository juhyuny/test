import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('detail-element')
class Detail extends LitElement{
  
  
  render(){
    console.log('d');
    return html `
    <div class="wrapper">
      <div class="brand">
        <label for="brand">브랜드</label>
        <input type="text" id="brand" value="" />
      </div>

      <div class="visual">
        <img src="" alt="" />
      </div>

      <div class="desc">
        <label for="description">상품 설명</label>
        <input type="text" id="description" value=""  />
      </div>

      <div class="price">
        <label for="price">가격</label>
        <input type="text" id="price" value="" />
      </div>

      <div class="discount">
        <label for="discount">할인율</label>
        <input type="text" id="discount" value="" />
      </div>

      <div class="real-price">원</div>
    </div>
    `;
  }
}