<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Empresa extends Model
{
    protected $table = "empresas";
    protected $fillable = ['name', 'tipologia', 'countrie_id', 'estado', 'ciudad', 'descripcion','user_id'];


    /**
     * Get the user that owns the empresa.
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }

}
