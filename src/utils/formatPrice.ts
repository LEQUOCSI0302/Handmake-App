// Đổi số thành dạng tiền Việt, ví dụ: 180000 -> "180.000₫"
export function formatPrice(price: number): string {
    return price.toLocaleString("vi-VN") + "₫";
}
