<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Gejalahama;
use Illuminate\Http\Request;

class GejalahamaController extends Controller
{
    public function store(Request $request)
    {
    $request->validate([
    'name' => 'required',
    ],[
    'name.required' => 'Nama gejala harus diisi!',
    ]);

    
    Gejalahama::create([
    'name' => $request->name
    ]);

     return back();
     }

     public function update(Request $request)
     {
     $request->validate([
     'name' => 'required',
     ]);

     Gejalahama::where('id', $request->id)->update([
     'name' => $request->name,
     ]);

     return back();
     }

     public function delete(Request $request)
     {
     Gejalahama::where('id', $request->id)->delete();

     return back();
     }

     public function data()
     {
     return Gejalahama::latest()->get();
     }
}
