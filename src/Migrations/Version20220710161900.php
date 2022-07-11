<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220710161900 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE spc (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE users_role DROP PRIMARY KEY');
        $this->addSql('ALTER TABLE users_role ADD PRIMARY KEY (users_id, role_id)');
        $this->addSql('ALTER TABLE users_role RENAME INDEX idx_e35f4dc667b3b43d TO IDX_98E0C46467B3B43D');
        $this->addSql('ALTER TABLE users_role RENAME INDEX idx_e35f4dc6d60322ac TO IDX_98E0C464D60322AC');
        $this->addSql('ALTER TABLE article CHANGE utilisateurs_id utilisateurs_id INT NOT NULL, CHANGE title title VARCHAR(255) NOT NULL, CHANGE content content LONGTEXT NOT NULL, CHANGE image image VARCHAR(255) NOT NULL, CHANGE created_at created_at DATETIME NOT NULL');
        $this->addSql('ALTER TABLE carousel CHANGE picture picture VARCHAR(255) NOT NULL, CHANGE caption caption VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE role CHANGE intitule intitule VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE comment CHANGE article_id article_id INT DEFAULT NULL, CHANGE utilisateur_id utilisateur_id INT DEFAULT NULL, CHANGE author author VARCHAR(255) DEFAULT NULL, CHANGE content content LONGTEXT DEFAULT NULL, CHANGE created_at created_at DATETIME DEFAULT NULL, CHANGE rating rating INT DEFAULT NULL');
        $this->addSql('ALTER TABLE category CHANGE title title VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE spc');
        $this->addSql('ALTER TABLE article CHANGE utilisateurs_id utilisateurs_id INT DEFAULT NULL, CHANGE title title VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE content content LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE image image VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE created_at created_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE carousel CHANGE picture picture VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE caption caption VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE category CHANGE title title VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE comment CHANGE article_id article_id INT NOT NULL, CHANGE utilisateur_id utilisateur_id INT NOT NULL, CHANGE author author VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE content content LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE created_at created_at DATETIME NOT NULL, CHANGE rating rating INT NOT NULL');
        $this->addSql('ALTER TABLE role CHANGE intitule intitule VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE users_role DROP PRIMARY KEY');
        $this->addSql('ALTER TABLE users_role ADD PRIMARY KEY (role_id, users_id)');
        $this->addSql('ALTER TABLE users_role RENAME INDEX idx_98e0c464d60322ac TO IDX_E35F4DC6D60322AC');
        $this->addSql('ALTER TABLE users_role RENAME INDEX idx_98e0c46467b3b43d TO IDX_E35F4DC667B3B43D');
    }
}
