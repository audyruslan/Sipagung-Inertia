<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(RoleSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(DataHamaSeeder::class);
        $this->call(GejalaHamaSeeder::class);
        $this->call(DataPenyakitSeeder::class);
        $this->call(GejalaPenyakitSeeder::class);

        // \App\Models\User::factory(10)->create();
    }
}
