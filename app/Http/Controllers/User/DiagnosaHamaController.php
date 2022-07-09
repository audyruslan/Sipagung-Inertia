<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Basishama;
use App\Models\Gejalahama;
use App\Models\Hama;
use App\Models\Hasilhama;
use App\Models\Kondisihama;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class DiagnosaHamaController extends Controller
{
  public function index()
  {
    return inertia('User/DiagnosaHama');
  }

  // Ambil data Dari 
  public function getData(Request $request)
  {
    // return $request;
    $argejala = array();
    $arbobot = array(
      '0', '1', '0.8', '0.6', '0.4', '-0.2', '-0.4', '-0.6', '-0.8', '-1'
    );

    dd($request->toArray());
    die;

    // for ($i = 0; $i < count($request); $i++) {
    //   $arkondisi = explode("_", $request[$i]);
    //   if (strlen($request[$i]) > 1) {
    //     $argejala += array($arkondisi[0] => $arkondisi[1]);
    //   }
    // }

    // dd($argejala);
    // die;

    $sqlkondisi = KondisiHama::orderBy('id')->get();
    while ($rkondisi = $sqlkondisi->toArray()) {
      $arkondisitext[$rkondisi['id']] = $rkondisi['name'];
    }

    $sqlpkt = Hama::orderBy('id')->get();
    while ($rpkt = mysqli_fetch_array($sqlpkt)) {
      $arpkt[$rpkt['id']] = $rpkt['name'];
      $ardpkt[$rpkt['id']] = $rpkt['detail'];
      $arspkt[$rpkt['id']] = $rpkt['solution'];
      $argpkt[$rpkt['id']] = $rpkt['image'];
    }

    // Perhitungan Certainty Factor (CF)
    $sqlpenyakit = Hama::orderBy('id')->get();
    $arpenyakit = array();
    while ($rpenyakit = mysqli_fetch_array($sqlpenyakit)) {
      $cftotal_temp = 0;
      $cf = 0;
      $rpen = $rpenyakit[0];
      $sqlgejala = BasisHama::where('id', '=',  $rpen)->get();;
      $cflama = 0;
      while ($rgejala = mysqli_fetch_array($sqlgejala)) {
        $arkondisi = explode("_", $array[0]);
        $gejala = $arkondisi[0];

        for ($i = 0; $i < count($array); $i++) {
          $arkondisi = explode("_", $array[$i]);
          $gejala = $arkondisi[0];
          if ($rgejala['id'] == $gejala) {
            // $cf = ($rgejala['mb'] - $rgejala['md']) * $arbobot[$arkondisi[1]];
            $cf = $argejala['value'];
            if (($cf >= 0) && ($cf * $cflama >= 0)
            ) {
              $cflama = $cflama + ($cf * (1 - $cflama));
            }
            if ($cf * $cflama < 0) {
              $cflama = ($cflama + $cf) / (1 - Min(abs($cflama), abs($cf)));
            }
            if (($cf < 0) && ($cf * $cflama >= 0)
            ) {
              $cflama = $cflama + ($cf * (1 + $cflama));
            }
          }
        }
      }
      if ($cflama > 0) {
        $arpenyakit += array($rpenyakit[0] => number_format($cflama, 4));
      }
    }

    arsort($arpenyakit);
  }
}