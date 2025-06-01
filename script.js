function pesanProduk(namaProduk, harga) {
    const pesan = `Halo, saya tertarik untuk membeli produk:\n\nNama Produk: ${namaProduk}\nHarga: Rp ${harga.toLocaleString('id-ID')}\n\nMohon informasi lebih lanjut mengenai produk ini.`;
    const encodedPesan = encodeURIComponent(pesan);
    const waLink = `https://wa.me/+628988513047?text=${encodedPesan}`;
    window.open(waLink, '_blank');
} 