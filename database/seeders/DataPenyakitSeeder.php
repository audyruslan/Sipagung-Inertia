<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Penyakit;

class DataPenyakitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Penyakit::create([
        'id' => '1',
        'name' => 'Penyakit Hawar Daun',
        'detail' => 'Hawar daun Exserohilum turcicum (Pass.) Leonard et Suggs merupakan penyakit pada tanaman jagung
        yang disebabkan oleh jamur E. turcicum (Pass.) Leonard et Suggs',
        'solution' => 'Solution Belum Tersedia',
        'image' => '',
        ]);
        Penyakit::create([
        'id' => '2',
        'name' => 'Penyakit Bulai',
        'detail' => 'Penyakit bulai merupakan penyakit utama pada tanaman jagung yang disebabkan oleh jamur
        Peronosclerospora Maydis. Perkembangan penyakit ini dimulai dengan infeksi konidia (spora jamur) yang jatuh di permukaan daun jagung. Konidia tersebut kemudian berkembang dan masuk ke dalam jaringan tanaman muda melalui stomata dan selanjutnya berkembang hingga ke titik tumbuh tanaman.',
        'solution' => 'Solution Belum Tersedia',
        'image' => '',
        ]);
        Penyakit::create([
        'id' => '3',
        'name' => 'Penyakit Busuk Tongkol Fusarium',
        'detail' => 'Penyakit busuk tongkol Fusarium disebabkan oleh infeksi cendawan Fusarium moniliforme dan penyakit
        busuk batang jagung ini tersebar luas di Eropa, Amerika, Afrika, Australia, dan Asia.',
        'solution' => 'Solution Belum Tersedia',
        'image' => '',
        ]);
        Penyakit::create([
        'id' => '4',
        'name' => 'Penyakit Karat Daun',
        'detail' => 'Penyakit karat adalah segolongan penyakit tumbuhan yang disebabkan oleh golongan cendawan (fungi)
        yang termasuk dalam bangsa (ordo) Pucciniales. Penyakit ini paling jelas gejalanya terlihat pada daun, sehingga
        disebut karat daun.',
        'solution' => 'Solution Belum Tersedia',
        'image' => '',
        ]);
        Penyakit::create([
        'id' => '5',
        'name' => 'Penyakit Virus Mosaik Kerdil Jagung',
        'detail' => 'Penyakit ini merupakan penyakit virus jagung yang pertama dilaporkan di Indonesia. Penyebarannya sangat luas, meliputi hampir di semua negara penghasil jagung di dunia.',
        'solution' => 'Solution Belum Tersedia',
        'image' => '',
        ]);
    }
}
