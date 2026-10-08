function pesanProduk(namaProduk, harga, berat) {
    const pesan = `Halo, saya tertarik untuk membeli produk:\n\nNama Produk: ${namaProduk}\nBerat: ${berat}\nHarga: Rp ${harga.toLocaleString('id-ID')}\n\nMohon informasi lebih lanjut mengenai produk ini.`;
    const encodedPesan = encodeURIComponent(pesan);
    const waLink = `https://wa.me/628988513047?text=${encodedPesan}`;
    window.open(waLink, '_blank');
} 

const productSearch = document.getElementById('productSearch');
const productNameFilter = document.getElementById('productNameFilter');
const productPriceFilter = document.getElementById('productPriceFilter');
const productGrid = document.getElementById('productGrid');

if (productGrid) {
    const productCards = Array.from(productGrid.children);
    const productResultCount = document.getElementById('productResultCount');
    const productEmptyMessage = document.getElementById('productEmptyMessage');

    function filterProducts() {
        const searchTerm = productSearch.value.trim().toLocaleLowerCase('id-ID');
        const selectedName = productNameFilter.value;
        const [minimumPrice, maximumPrice] = productPriceFilter.value
            ? productPriceFilter.value.split('-').map((price) => price ? Number(price) : Infinity)
            : [0, Infinity];
        let visibleCount = 0;

        productCards.forEach((card) => {
            const name = card.querySelector('.card-title').textContent.trim();
            const cardText = card.textContent.toLocaleLowerCase('id-ID');
            const price = Number(card.querySelector('.price').textContent.replace(/[^\d]/g, ''));
            const matchesSearch = cardText.includes(searchTerm);
            const matchesName = !selectedName || name === selectedName;
            const matchesPrice = price >= minimumPrice && price <= maximumPrice;
            const isVisible = matchesSearch && matchesName && matchesPrice;

            card.classList.toggle('d-none', !isVisible);
            visibleCount += Number(isVisible);
        });

        productResultCount.textContent = `Menampilkan ${visibleCount} dari ${productCards.length} produk`;
        productEmptyMessage.classList.toggle('d-none', visibleCount > 0);
    }

    [productSearch, productNameFilter, productPriceFilter].forEach((control) => {
        control.addEventListener('input', filterProducts);
        control.addEventListener('change', filterProducts);
    });

    document.getElementById('resetProductFilters').addEventListener('click', () => {
        productSearch.value = '';
        productNameFilter.value = '';
        productPriceFilter.value = '';
        filterProducts();
    });

    filterProducts();
}