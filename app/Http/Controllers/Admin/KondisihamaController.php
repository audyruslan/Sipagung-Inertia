<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Kondisihama;
use Illuminate\Http\Request;

class KondisihamaController extends Controller
{
      public function store(Request $request)
      {
      $request->validate([
      'name' => 'required',
      ],[
      'name.required' => 'Nama kondisi harus diisi!',
      ]);


      Kondisihama::create([
      'name' => $request->name
      ]);

      return back();
      }

      public function update(Request $request)
      {
      $request->validate([
      'name' => 'required',
      ]);

      Kondisihama::where('id', $request->id)->update([
      'name' => $request->name,
      ]);

      return back();
      }

      public function delete(Request $request)
      {
      Kondisihama::where('id', $request->id)->delete();

      return back();
      }

      public function data()
      {
      return Kondisihama::latest()->get();
      }
}
