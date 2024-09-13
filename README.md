# CASE PROJECT
management restaurant yang berfungsi untuk memanage sebuah customer, order, transaksi, menu dan table(meja)

# DESKRIPSI CASE
dalam project ini memiliki 3 Entitas utama yang berhubungan satu sama lain :
1.Meja (Table): Meja yang tersedia di restoran.
2.Pelanggan (Customer): Pelanggan yang memesan meja.
3.Menu: Menu makanan dan minuman yang dipilih oleh pelanggan.
4.Pesanan (Order): Pesanan makanan dan minuman yang diorder oleh pelanggan.
5.Transaksi (Pembayaran): Transaksi yang dilakukan pelanggan.

# RELASI ANTAR ENTITAS
1.Meja ke Pelanggan: Setiap meja bisa dipesan oleh satu pelanggan, tetapi tidak setiap waktu.
    Relasi: One-to-One

2.Pelanggan ke Menu : Setiap pelanggan bisa memilih beberapa menu untuk dipesan.
    Relasi: One-to-Many

3.Menu ke Pesanan: Setiap menu yang dipilih bisa diproses pesanan.
    Relasi: Many-to-Many

4.Pesanan ke Meja: Setiap pesanan terkait dengan satu meja yang dipesan oleh pelanggan.
    Relasi: Many-to-One

5.Pesanan ke Customer: Setiap pesanan terkait dengan satu pelanggan.
    Relasi: Many-to-One

6.Customer ke Transaksi: Setiap customer wajib membayar pesanan yang di pesan.
    Relasi: One-to-One

7.Transaksi ke Menu: Setiap transaksi melihat daftar harga banyaknya menu yang dipesan.
    Relasi: One-to-Many

PROJECT INI DIBUAT UNTUK TUGAS BACKEND EXPRESS JS MENGGUNAKAN ORM SEQUELIZE DAN SISTEM CRUD

# HASIL DARI DB YANG DIBUAT

### CUSTOMER
<img src="./img/customer.jpg">

### TABLE(MEJA)
<img src="./img/table.jpg">

### ORDER
<img src="./img/order.jpg">

### MENU
<img src="./img/menuu.jpg">

### TRANSAKSI
<img src="./img/transaksi.jpg">

# UML
<img src="./img/uml_classdiagram.jpg">
<img src="./img/uml_erd.jpg">

# COPYRIGHT BY © cirss_
real inima, soalnya gada forked from-nya rekkk😂😹😹😹