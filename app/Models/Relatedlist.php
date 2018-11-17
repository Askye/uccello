<?php

namespace Uccello\Core\Models;

use Uccello\Core\Database\Eloquent\Model;

class Relatedlist extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'relatedlists';

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'data' => 'object',
    ];

    protected function setTablePrefix()
    {
        $this->tablePrefix = env('UCCELLO_TABLE_PREFIX', 'uccello_');
    }

    public function module()
    {
        return $this->belongsTo(Module::class);
    }

    public function relatedModule()
    {
        return $this->belongsTo(Module::class);
    }

    public function relatedTab()
    {
        return $this->belongsTo(Tab::class);
    }

    public function relatedField()
    {
        return $this->belongsTo(Field::class);
    }
}
