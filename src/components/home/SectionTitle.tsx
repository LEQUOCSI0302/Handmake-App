import "./home.css";

type SectionTitleProps = {
    title: string;
    subtitle?: string; // dấu ? nghĩa là không bắt buộc
};

// Tiêu đề dùng chung cho các khu ở trang chủ
export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
    return (
        <div className="section-title">
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
        </div>
    );
}
