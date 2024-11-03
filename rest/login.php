<?php
// Cek apakah form login telah disubmit
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ambil data yang dikirimkan melalui form
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Di sini Anda bisa melakukan validasi lebih lanjut, seperti memeriksa kecocokan data dengan database, dll.

    // Contoh validasi sederhana
    if ($username === 'user' && $password === 'password') {
        // Autentikasi berhasil
        session_start();
        $_SESSION['username'] = $username;
        header("Location: dashboard.php"); // Redirect ke halaman dashboard jika login berhasil
        exit;
    } else {
        // Autentikasi gagal
        $error_message = "Username atau password salah.";
    }
}
?>
