<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DiagnosaPenyakitController extends Controller
{
  public function index()
  {
    return inertia('User/DiagnosaPenyakit');
  }
}
