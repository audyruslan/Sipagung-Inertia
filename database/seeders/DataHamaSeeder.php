<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Hama;

class DataHamaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Hama::create([
        'id' => '1',
        'name' => 'Hama Lalat Bibit',
        'detail' => 'Hama lalat bibit ini merupakan serangga yang baru menetas dan biasanya menyerang dengan cara membuat atau melubangi batang tanaman jagung dan memakannya sampai ke dasar batang dari tanaman jagung itu sendiri.',
        'solution' => 'Solution Belum Tersedia',
        'image' => '',
        ]);
        Hama::create([
        'id' => '2',
        'name' => 'Hama Ulat Grayak',
        'detail' => 'Ulat grayak merupakan serangga ngengat asli daerah tropis yang sebelumnya hanya ditemukan pada pertanaman jagung di Amerika Serikat, Argentina, dan Afrika. Tahun 2018 FAW memasuki Benua Asia di kawasan India, Myanmar, dan Thailand. Maret 2019 dilaporkan merusak tanaman jagung dengan tingkat serangan berat di Kabupaten Pasaman Barat (Sumatera Barat), kemudian menyebar hampir di seluruh wilayah Indonesia. Sebagai jenis hama baru yang menyerang pertanaman jagung di Indonesia, keberadaan hama ulat grayak atau Spodoptera frugiperda ini dapat menjadi ancaman serius bagi para petani di Indonesia.',
        'solution' => 'Solution Belum Tersedia',
        'image' => '',
        ]);
        Hama::create([
        'id' => '3',
        'name' => 'Hama Larva Penggerek Batang',
        'detail' => 'Hama penggerek batang (Ostrinia funacalis) merupakan salah satu dari beberapa jenis hama yang menyerang tanaman jagung, menimbulkan kerusakan secara fisik dan mengakibatkan kerugian secara ekonomi sehingga memerlukan tindakan pengendalian.',
        'solution' => 'Solution Belum Tersedia',
        'image' => '',
        ]);
        Hama::create([
        'id' => '4',
        'name' => 'Hama Penggerek Tongkol',
        'detail' => 'Helicoverpa armigera merupakan serangga dari kelompok ngengat yang larvanya menjadi salah satu hama penting pada pertanaman kapas dan jagung.',
        'solution' => 'Solution Belum Tersedia',
        'image' => '',
        ]);
        Hama::create([
        'id' => '5',
        'name' => 'Hama Belalang Kembara ',
        'detail' => 'Belalang kembara adalah jenis belalang besar yang paling tersebar di dunia, dan merupakan
        satu-satunya spesies anggota marga Locusta. Serangga hama ini dapat dijumpai di seluruh Dunia Lama yang beriklim agak hangat, mulai dari Afrika, Asia, Australia, sampai Selandia Baru.',
        'solution' => 'Solution Belum Tersedia',
        'image' => '',
        ]);
    }
}
