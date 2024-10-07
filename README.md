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
1.Pelanggan ke Meja: Setiap pelanggan hanya bisa memilih/memesan satu meja dan sebaliknya.
    Relasi: One-to-One

2.Pelanggan ke Menu : Setiap pelanggan bisa memilih beberapa menu untuk dipesan dan sebaliknya.
    Relasi: One-to-Many

3.Pelanggan ke Pesanan(Order) : Setiap pelanggan dapat memesan banyak Orderan dan sebaliknya.
    Relasi: One-to-Many

4.Pesanan(Order) ke Pelanggan: Banyaknya setiap pesanan terkait dengan satu pelanggan.
    Relasi: Many-to-One
    
5.Pesanan(Order) ke Menu: Dalam satu kali pesanan(order) dapat memesan banyak menu dan sebaliknya.
    Relasi: One-to-Many
    
6.Meja ke Pesanan(order): Satu meja dapat menerima banyaknya pesanan(order) yang dipesan dan sebaliknya.
    Relasi: One-to-Many

7.Pesanan(Order) ke Meja: Banyaknya setiap pesanan hanya terkait dengan satu meja yang dipesan oleh pelanggan.
    Relasi: Many-to-One

8.Customer ke Transaksi: Setiap customer dapat membayar atau melakukan transaksi dengan hanya sekali transaksi.
    Relasi: One-to-One
    

PROJECT INI DIBUAT UNTUK TUGAS BACKEND EXPRESS JS MENGGUNAKAN ORM SEQUELIZE DAN SISTEM CRUD

# HASIL DARI DB YANG DIBUAT

### CUSTOMER
<img src="./img/pelanggan.jpg">

### TABLE(MEJA)
<img src="./img/meja.jpg">

### ORDER
<img src="./img/pesanan.jpg">

### MENU
<img src="./img/menu.jpg">

### TRANSAKSI
<img src="./img/payment.jpg">

# UML
<img src="./img/5table.jpg">
<img src="./img/5erd.jpg">

# COPYRIGHT BY © cirss_
