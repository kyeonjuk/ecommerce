function removeItem(itemId) {
    if (confirm("정말로 이 아이템을 삭제하시겠습니까?")) {
        fetch(`/api/cart/remove/${itemId}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                // 삭제가 성공했을 때 UI 업데이트 (예: 행 삭제)
                location.reload(); // 페이지 새로고침
            } else {
                alert("삭제 중 오류가 발생했습니다.");
            }
        })
        .catch(error => {
            console.error('삭제 요청 오류:', error);
        });
    }
}