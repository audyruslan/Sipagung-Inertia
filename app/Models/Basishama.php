<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Basishama extends Model
{
    use HasFactory;
    protected $guarded=[];

    public function gejalahama()
    {
    return $this->belongsTo(Gejalahama::class);
    }
    public function hama()
    {
    return $this->belongsTo(Hama::class);
    }
}
