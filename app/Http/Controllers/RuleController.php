<?php

namespace App\Http\Controllers;

use App\Models\Rule;
use Illuminate\Http\Request;

class RuleController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'disease_id' => 'required',
            'symptom_id' => 'required',
            'value' => 'required',
        ]);

        Rule::create([
            'disease_id' => $request->disease_id,
            'symptom_id' => $request->symptom_id,
            'value' => $request->value,
        ]);

        return back();
    }

    public function delete(Request $request)
    {
        Rule::where('id', $request->id)->delete();

        return back();
    }

    public function data()
    {
      return Rule::with(['symptom', 'disease'])->latest()->get();
    }
}
