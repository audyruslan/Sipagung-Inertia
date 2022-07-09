<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class KeteranganController extends Controller
{
  public function index()
  {
    return inertia('User/Keterangan');
  }
}
