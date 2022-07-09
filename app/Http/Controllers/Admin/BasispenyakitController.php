<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Basispenyakit;
use Illuminate\Http\Request;

class BasispenyakitController extends Controller
{
    public function store(Request $request)
    {
      $request->validate([
        'penyakit_id' => 'required',
        'gejalapenyakit_id' => 'required',
        'value' => 'required',
      ]);
      
    Basispenyakit::create([
    'penyakit_id' => $request->penyakit_id,
    'gejalapenyakit_id' => $request->gejalapenyakit_id,
    'value' => $request->value,
    ]);

    return back();
    }

    public function delete(Request $request)
    {
    Basispenyakit::where('id', $request->id)->delete();

    return back();
    }

    public function data()
    {
    return Basispenyakit::with(['gejalapenyakit', 'penyakit'])->latest()->get();
    }
}
