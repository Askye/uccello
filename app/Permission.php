<?php

namespace Sardoj\Uccello;

use Sardoj\Uccello\Database\Eloquent\Model;

class Permission extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'permissions';

    /**
     * List of capabilities
     */
    const CAN_CREATE = 'create';
    const CAN_RETRIEVE = 'retrieve';
    const CAN_UPDATE = 'update';
    const CAN_DELETE = 'delete';
    const CAN_ADMIN = 'admin';

    public function profile()
    {
        return $this->belongsTo(Profile::class);
    }

    public function module()
    {
        return $this->belongsTo(Module::class);
    }
}
