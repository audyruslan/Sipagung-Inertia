<?php

namespace App\Http\Controllers\Admin; 

use App\Http\Controllers\Controller;
use App\Models\Hama;
use Illuminate\Http\Request;

class HamaController extends Controller
{
    public function store(Request $request)
    {
    $request->validate([
    'name' => 'required',
    'detail' => 'required',
    'solution' => 'required',
    'image' => 'required',
    ]);

    $foto = $request->file('image');
    $fileName = $request->name . '.' . $foto[0]->getClientOriginalExtension();

    $path = $request->image[0]->storeAs('public/hama', $fileName);

    Hama::create([
    'name' => $request->name,
    'detail' => $request->detail,
    'solution' => $request->solution,
    'image' => $path,
    ]);

    return back();
    }

    public function update(Request $request)
    {
    $request->validate([
    'name' => 'required',
    'detail' => 'required',
    'solution' => 'required',
    'image' => 'required',
    ]);

    if ($request->file('image')) {
    $foto = $request->file('image');
    $fileName = $request->name . '.' . $foto[0]->getClientOriginalExtension();

    $path = $request->image[0]->storeAs('public/hama', $fileName);

    Hama::where('id', $request->id)->update([
    'name' => $request->name,
    'detail' => $request->detail,
    'solution' => $request->solution,
    'image' => $path,
    ]);

    } else {
    Hama::where('id', $request->id)->update([
    'name' => $request->name,
    'detail' => $request->detail,
    'solution' => $request->solution,
    ]);
    }

    return back();
    }

    public function delete(Request $request)
    {
    Hama::where('id', $request->id)->delete();

    return back();
    }

    public function data()
    {
    return Hama::latest()->get();
    }
}
