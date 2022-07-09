<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Basishama;
use Illuminate\Http\Request;

class BasishamaController extends Controller
{
    public function store(Request $request)
    {
      $request->validate([
        'hama_id' => 'required',
        'gejalahama_id' => 'required',
        'value' => 'required',
      ]);

    Basishama::create([
    'hama_id' => $request->hama_id,
    'gejalahama_id' => $request->gejalahama_id,
    'value' => $request->value,
    ]);

    return back();
    }

    public function delete(Request $request)
    {
    Basishama::where('id', $request->id)->delete();

    return back();
    }

    public function data()
    {
    return Basishama::with(['gejalahama', 'hama'])->latest()->get();
    }
}
