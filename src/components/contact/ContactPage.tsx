import "./ContactPage.css";
function ContactForm(){
    return (
        <form className = "contact-form" action="">
            <label>Họ và tên</label>
            <input></input>
            <label>Email của bạn</label>
            <input></input>
            <label>Số điện thoại</label>
            <input></input>
            <label>Ghi chú (Không bắt buộc)</label>
            <textarea></textarea>
            <button type="submit">Gửi</button>
        </form>
    );
}
export default ContactForm;