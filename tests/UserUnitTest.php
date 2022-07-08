<?php

namespace App\Tests;



use App\Entity\Users;
use PHPUnit\Framework\TestCase;

class UserUnitTest extends TestCase
{
    public function testIsTrue()
    {
        $user = new Users();

        $user
            ->setEmail('trueEmail')
            ->setPassword('truePassword');

        $this->assertTrue($user->getEmail() === 'trueEmail');
        $this->assertTrue($user->getPassword() === 'truePassword');
        
    }
    public function testIsFalse()
    {
        $user = new Users();

        $user
            ->setEmail('trueEmail')
            ->setPassword('truePassword');

        $this->assertFalse( $user->getEmail() === 'falseEmail');
        $this->assertFalse( $user->getPassword() === 'falsePassword');
        
    }
    // Quand je ne set rien, je vérifie que je ne récupère rien
    public function testIsEmpty()
    {
        $user = new Users();
    
        $this->assertEmpty($user->getEmail());
        $this->assertEmpty($user->getPassword());
        
    }
}
