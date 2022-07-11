<?php

namespace App\Form;

use App\Entity\Spc;
use App\Entity\Users;
use App\Entity\Department;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;

class RegistrationType extends AbstractType
{

    private function getConfiguration($label, $placeholder, $options = []) {
        return array_merge([
            'label' => $label,
            'attr' => [
                'placeholder' => $placeholder
                ]
            ], $options);
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email', EmailType::class)
            ->add('username', TextType::class)
            ->add('password', PasswordType::class)
            // ->add('spc', TextType::class)
            ->add('spc', EntityType::class, [
                'class' => Spc::class,
                'choice_label' => 'title',
                'required' => false,
                ])
            ->add('department', EntityType::class, [
                'class' => Department::class,
                'choice_label' => 'title',
                'required' => false,
                ])
            ->add('confirm_password', PasswordType::class)
            // ->add('avatar', UrlType::class)
            // ->add('department', IntegerType::class)
            // ->add('navColor', ChoiceType::class,[
            //     'choices' => [
            //     'BLEU (Thème par défaut)' => 'bg-primary',
            //     'VERT' => 'bg-success',
            //     'ROUGE' => 'bg-danger',
            //     'ORANGE' => 'bg-warning',
            //     'BLEU FONCE' => 'bg-info',
            //     'GRIS FONCE' => 'bg-secondary',
            // ],
            //     'multiple'  => false,   
            //     'expanded'  => false, 
            //     'label' => 'Couleur du menu de navigation',
            // ])
            ->add('rgpd', CheckboxType::class, [
                'label' => 'J\'accepte que mes informations personnelles et mes commentaires soient stockés dans la base de données de .BLOG. J\'ai bien noté qu\'en aucun cas, ces données ne seront cédées à des tiers.',
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