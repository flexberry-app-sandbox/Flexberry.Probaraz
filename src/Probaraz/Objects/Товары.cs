﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Probaraz
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Товары.
    /// </summary>
    // *** Start programmer edit section *** (Товары CustomAttributes)

    // *** End programmer edit section *** (Товары CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТоварыE", new string[] {
            "НаимТовара as \'Наим товара\'",
            "Производит as \'Производит\'",
            "ЕдиницыИзмер as \'Единицы измер\'",
            "Цена as \'Цена\'",
            "Масса as \'Масса\'"})]
    [View("ТоварыL", new string[] {
            "НаимТовара as \'Наим товара\'",
            "Производит as \'Производит\'",
            "ЕдиницыИзмер as \'Единицы измер\'",
            "Цена as \'Цена\'",
            "Масса as \'Масса\'"})]
    public class Товары : ICSSoft.STORMNET.DataObject
    {
        
        private string fНаимТовара;
        
        private string fПроизводит;
        
        private IIS.Probaraz.ЕдИзм fЕдиницыИзмер;
        
        private int fЦена;
        
        private int fМасса;
        
        // *** Start programmer edit section *** (Товары CustomMembers)

        // *** End programmer edit section *** (Товары CustomMembers)

        
        /// <summary>
        /// ЕдиницыИзмер.
        /// </summary>
        // *** Start programmer edit section *** (Товары.ЕдиницыИзмер CustomAttributes)

        // *** End programmer edit section *** (Товары.ЕдиницыИзмер CustomAttributes)
        public virtual IIS.Probaraz.ЕдИзм ЕдиницыИзмер
        {
            get
            {
                // *** Start programmer edit section *** (Товары.ЕдиницыИзмер Get start)

                // *** End programmer edit section *** (Товары.ЕдиницыИзмер Get start)
                IIS.Probaraz.ЕдИзм result = this.fЕдиницыИзмер;
                // *** Start programmer edit section *** (Товары.ЕдиницыИзмер Get end)

                // *** End programmer edit section *** (Товары.ЕдиницыИзмер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товары.ЕдиницыИзмер Set start)

                // *** End programmer edit section *** (Товары.ЕдиницыИзмер Set start)
                this.fЕдиницыИзмер = value;
                // *** Start programmer edit section *** (Товары.ЕдиницыИзмер Set end)

                // *** End programmer edit section *** (Товары.ЕдиницыИзмер Set end)
            }
        }
        
        /// <summary>
        /// Масса.
        /// </summary>
        // *** Start programmer edit section *** (Товары.Масса CustomAttributes)

        // *** End programmer edit section *** (Товары.Масса CustomAttributes)
        public virtual int Масса
        {
            get
            {
                // *** Start programmer edit section *** (Товары.Масса Get start)

                // *** End programmer edit section *** (Товары.Масса Get start)
                int result = this.fМасса;
                // *** Start programmer edit section *** (Товары.Масса Get end)

                // *** End programmer edit section *** (Товары.Масса Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товары.Масса Set start)

                // *** End programmer edit section *** (Товары.Масса Set start)
                this.fМасса = value;
                // *** Start programmer edit section *** (Товары.Масса Set end)

                // *** End programmer edit section *** (Товары.Масса Set end)
            }
        }
        
        /// <summary>
        /// НаимТовара.
        /// </summary>
        // *** Start programmer edit section *** (Товары.НаимТовара CustomAttributes)

        // *** End programmer edit section *** (Товары.НаимТовара CustomAttributes)
        [StrLen(255)]
        public virtual string НаимТовара
        {
            get
            {
                // *** Start programmer edit section *** (Товары.НаимТовара Get start)

                // *** End programmer edit section *** (Товары.НаимТовара Get start)
                string result = this.fНаимТовара;
                // *** Start programmer edit section *** (Товары.НаимТовара Get end)

                // *** End programmer edit section *** (Товары.НаимТовара Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товары.НаимТовара Set start)

                // *** End programmer edit section *** (Товары.НаимТовара Set start)
                this.fНаимТовара = value;
                // *** Start programmer edit section *** (Товары.НаимТовара Set end)

                // *** End programmer edit section *** (Товары.НаимТовара Set end)
            }
        }
        
        /// <summary>
        /// Производит.
        /// </summary>
        // *** Start programmer edit section *** (Товары.Производит CustomAttributes)

        // *** End programmer edit section *** (Товары.Производит CustomAttributes)
        [StrLen(255)]
        public virtual string Производит
        {
            get
            {
                // *** Start programmer edit section *** (Товары.Производит Get start)

                // *** End programmer edit section *** (Товары.Производит Get start)
                string result = this.fПроизводит;
                // *** Start programmer edit section *** (Товары.Производит Get end)

                // *** End programmer edit section *** (Товары.Производит Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товары.Производит Set start)

                // *** End programmer edit section *** (Товары.Производит Set start)
                this.fПроизводит = value;
                // *** Start programmer edit section *** (Товары.Производит Set end)

                // *** End programmer edit section *** (Товары.Производит Set end)
            }
        }
        
        /// <summary>
        /// Цена.
        /// </summary>
        // *** Start programmer edit section *** (Товары.Цена CustomAttributes)

        // *** End programmer edit section *** (Товары.Цена CustomAttributes)
        public virtual int Цена
        {
            get
            {
                // *** Start programmer edit section *** (Товары.Цена Get start)

                // *** End programmer edit section *** (Товары.Цена Get start)
                int result = this.fЦена;
                // *** Start programmer edit section *** (Товары.Цена Get end)

                // *** End programmer edit section *** (Товары.Цена Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Товары.Цена Set start)

                // *** End programmer edit section *** (Товары.Цена Set start)
                this.fЦена = value;
                // *** Start programmer edit section *** (Товары.Цена Set end)

                // *** End programmer edit section *** (Товары.Цена Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТоварыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТоварыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТоварыE", typeof(IIS.Probaraz.Товары));
                }
            }
            
            /// <summary>
            /// "ТоварыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТоварыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТоварыL", typeof(IIS.Probaraz.Товары));
                }
            }
        }
    }
}
