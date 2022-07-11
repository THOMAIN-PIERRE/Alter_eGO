<?php

namespace App\Form;

use App\Entity\Spc;

use App\Entity\Users;
use App\Entity\Department;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;

class AccountType extends AbstractType
{
    private function getConfiguration($label, $placeholder, $options = []) {
        return array_merge([
            'label' => $label,
            'attr' => [
                'placeholder' => $placeholder
                ]
            ], $options);
    }

    //Formulaire de modification de la partie profil du compte
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email', EmailType::class, $this->getConfiguration("Email", "Saisissez votre Email"))
            ->add('username', TextType::class, $this->getConfiguration("Nom d'utilisateur", "Saisissez votre nom d'utilisateur"))
            // ->add('avatar', UrlType::class, $this->getConfiguration("Avatar", "Saisissez l'URL de votre avatar"))
            ->add('spc', EntityType::class, [
                'class' => Spc::class,
                'choice_label' => 'title',
                'required' => false,
                'label' => "Catégorie Socio-Professionnelle",
                ])
            ->add('department', EntityType::class, [
                'class' => Department::class,
                'choice_label' => 'title',
                'required' => false,
                'label' => "Département",
                ])
            ->add('displayHelp', CheckboxType::class, [
                'label' => 'Cocher la case pour ne plus afficher l\'aide contextuelle "Alty"',
                'required' => true
                ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Users::class,
        ]);
    }
}
