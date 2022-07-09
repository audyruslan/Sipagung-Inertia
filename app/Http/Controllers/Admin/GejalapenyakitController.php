<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Gejalapenyakit;
use Illuminate\Http\Request;

class GejalapenyakitController extends Controller
{
    public function store(Request $request)
    {
    $request->validate([
    'name' => 'required',
    ],[
    'name.required' => 'Nama gejala harus diisi!',
    ]);

    Gejalapenyakit::create([
    'name' => $request->name
    ]);

    return back();
    }

    public function update(Request $request)
    {
    $request->validate([
    'name' => 'required',
    ]);

    Gejalapenyakit::where('id', $request->id)->update([
    'name' => $request->name,
    ]);

    return back();
    }

    public function delete(Request $request)
    {
    Gejalapenyakit::where('id', $request->id)->delete();

    return back();
    }

    public function data()
    {
    return Gejalapenyakit::latest()->get();
    }
}
