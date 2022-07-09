<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MasterpenyakitController extends Controller
{
    public function index()
    {
      return inertia('Admin/MasterPenyakit');
    }
}
