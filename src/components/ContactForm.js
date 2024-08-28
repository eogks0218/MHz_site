import "../scss/ContactForm.scss";

export default function ContactForm(){

    return(
        <form className="ContactForm">
            <div className="input-group">
                <input type="text" id="name" name="name" required/>
                <label htmlFor="name">성함/직책</label>
            </div>
            <div className="input-group">
                <input type="text" id="company" name="company" required />
                <label htmlFor="company">회사명</label>
            </div>
            <div className="input-group">
                <input type="text" id="email" name="email" required />
                <label htmlFor="email">이메일</label>
            </div>
            <div className="input-group">
                <input type="text" id="phone" name="phone" required />
                <label htmlFor="phone">전화번호</label>
            </div>
            <div className="input-group">
                <input type="text" id="site" name="site" required/>
                <label htmlFor="site">기존 사이트</label>
            </div>
            <div className="input-group">
                <input type="text" id="budget" name="budget" required />
                <label htmlFor="budget">월 예산</label>
            </div>
            <div className="input-group textarea-group">
                <textarea id="description" name="description" rows="5" required></textarea>
                <label htmlFor="description">프로젝트에 대한 설명 혹은 문의 내용</label>
            </div>
            <div className="checkbox-input">
                <input type="checkbox" id="consent" name="consent" required/>
                <label htmlFor="consent">
                    <span>개인정보 수집 및 이용에 동의합니다.</span>
                </label>
            </div>
            <button type="submit">문의하기</button>
        </form>
    )
}