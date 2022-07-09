<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Gejalahama;

class GejalaHamaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      Gejalahama::create([
      'id' => '1',
      'name' => 'Bentuk daun berlubang-lubang atau rusak',
      ]);
      Gejalahama::create([
      'id' => '2',
      'name' => 'Aktivitas hama ini hanya berlangsung pada musim hujan selama 1-2 bulan',
      ]);
      Gejalahama::create([
      'id' => '3',
      'name' => 'Larva yang baru menetas melubangi batang, kemudian membuat terowongan hingga ke dasar batang sehingga tanaman menjadi kuning dan akhirnya',
      ]);
      Gejalahama::create([
      'id' => '4',
      'name' => 'Pertumbuhan terlambat, menguning, jaringan membusuk atau gejala sundep',
      ]);
      Gejalahama::create([
      'id' => '5',
      'name' => 'Jika tanaman mengalami penyembuhan, maka pertumbuhannya akan kerdil.',
      ]);
      Gejalahama::create([
      'id' => '6',
      'name' => 'Larva kecil merusak daun serta serentak bergerombol dengan meninggalkan sisa-sisa epidermis bagian atas, bahkan hanya menyisakan tulang daunnya saja',
      ]);
      Gejalahama::create([
      'id' => '7',
      'name' => 'Biasanya larva berada di permukaan bawah daun',
      ]);
      Gejalahama::create([
      'id' => '8',
      'name' => 'Umumnya hama muncul pada saat musim kemarau',
      ]);
      Gejalahama::create([
      'id' => '9',
      'name' => 'Membuat lubang kecil pada daun',
      ]);
      Gejalahama::create([
      'id' => '10',
      'name' => 'Membuat lubang gorokan pada batang, bunga jantan atau pangkal tongkol, sehingga batang tassel mudah
      patah',
      ]);
      Gejalahama::create([
      'id' => '11',
      'name' => 'Terdapat kerusakan pada bagian tongkol',
      ]);
      Gejalahama::create([
      'id' => '12',
      'name' => 'Larva yang baru menetas akan makan pada jambul tongkol, dan kemudian membuat lubang masuk ke tongkol.',
      ]);
      Gejalahama::create([
      'id' => '13',
      'name' => 'Kotoran yang ditinggalkan larva menyebabkan bertumbuhnya jamur yang menghasilkan mikotoksin sehingga
      tongkol rusak.',
      ]);
      Gejalahama::create([
      'id' => '14',
      'name' => 'Hama ini menyerang tanaman muda, terutama pada pucuk atau malai yang. Dapat mengakibatkan tidak
      terbentuknya bunga jantan, berkurangnya hasil dan bahkan tanaman dapat mati',
      ]);
      Gejalahama::create([
      'id' => '15',
      'name' => 'Hama ini menyerang bagian daun terlebih dahulu, kemudian tulang daun dan batang',
      ]);
      Gejalahama::create([
      'id' => '16',
      'name' => 'Menyerang mulai dari tepi daun',
      ]);
      Gejalahama::create([
      'id' => '17',
      'name' => 'Hama ini dapat pula memakan batang dan tongkol jagung jika populasinya sangat tinggi dengan sumber makanan terbatas',
      ]);
    }
}
