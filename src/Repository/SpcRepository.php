<?php

namespace App\Repository;

use App\Entity\Spc;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Spc|null find($id, $lockMode = null, $lockVersion = null)
 * @method Spc|null findOneBy(array $criteria, array $orderBy = null)
 * @method Spc[]    findAll()
 * @method Spc[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SpcRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Spc::class);
    }

    // /**
    //  * @return Spc[] Returns an array of Spc objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Spc
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
