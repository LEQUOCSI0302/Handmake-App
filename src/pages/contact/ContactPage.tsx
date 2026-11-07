import "./ContactPage.css";
function ContactForm(){
    return (
        <>
            <form className="contact-form" action="">
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
            {/* Nhúng địa chỉ liên hệ vào trang liên hệ*/}
            <iframe className = "contact-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15673.386852635864!2d106.78552333812864!3d10.861212108876158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175276398969f7b%3A0x9672b7efd0893fc4!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBOw7RuZyBMw6JtIFRQLiBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1793892886747!5m2!1svi!2s"
                loading="lazy"></iframe>
        </>
    );
}

export default ContactForm;