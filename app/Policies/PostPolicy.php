<?php

namespace App\Policies;

use App\Models\Post;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PostPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(User $user)
    {
        //
    }


    public function view(User $user, Post $post)
    {
        //
    }


    public function create(User $user)
    {
        //
    }


    public function update(User $user, Post $post)
    {
        return $post->user()->is($user);
    }

    public function delete(User $user, Post $post)
    {
        return $post->user()->is($user);
    }

    public function restore(User $user, Post $post)
    {
        //
    }


    public function forceDelete(User $user, Post $post)
    {
        //
    }
}
