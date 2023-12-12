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
    /// Докум постав.
    /// </summary>
    // *** Start programmer edit section *** (ДокумПостав CustomAttributes)

    // *** End programmer edit section *** (ДокумПостав CustomAttributes)
    [AutoAltered()]
    [Caption("Докум постав")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ДокумПоставE", new string[] {
            "Дата as \'Дата\'",
            "НомерДогов as \'Номер договора\'",
            "Организация as \'Организация\'",
            "Организация.НаимОрганиз as \'Наименование организации\'",
            "Клиенты as \'Клиент\'",
            "Клиенты.НаимЗаказ as \'Заказчик\'"}, Hidden=new string[] {
            "Организация.НаимОрганиз",
            "Клиенты.НаимЗаказ"})]
    [AssociatedDetailViewAttribute("ДокумПоставE", "ИнфорОЗаказе", "ИнфорОЗаказеE", true, "", "Информация о заказе", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("ДокумПоставE", "Организация", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "НаимОрганиз")]
    [MasterViewDefineAttribute("ДокумПоставE", "Клиенты", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "НаимЗаказ")]
    [View("ДокумПоставL", new string[] {
            "Дата as \'Дата\'",
            "НомерДогов as \'Номер договора\'",
            "Организация.НаимОрганиз as \'Наименование организации\'",
            "Клиенты.НаимЗаказ as \'Заказчик\'"})]
    public class ДокумПостав : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДата;
        
        private int fНомерДогов;
        
        private IIS.Probaraz.Организация fОрганизация;
        
        private IIS.Probaraz.Клиенты fКлиенты;
        
        private IIS.Probaraz.DetailArrayOfИнфорОЗаказе fИнфорОЗаказе;
        
        // *** Start programmer edit section *** (ДокумПостав CustomMembers)

        // *** End programmer edit section *** (ДокумПостав CustomMembers)

        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (ДокумПостав.Дата CustomAttributes)

        // *** End programmer edit section *** (ДокумПостав.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (ДокумПостав.Дата Get start)

                // *** End programmer edit section *** (ДокумПостав.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (ДокумПостав.Дата Get end)

                // *** End programmer edit section *** (ДокумПостав.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокумПостав.Дата Set start)

                // *** End programmer edit section *** (ДокумПостав.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (ДокумПостав.Дата Set end)

                // *** End programmer edit section *** (ДокумПостав.Дата Set end)
            }
        }
        
        /// <summary>
        /// НомерДогов.
        /// </summary>
        // *** Start programmer edit section *** (ДокумПостав.НомерДогов CustomAttributes)

        // *** End programmer edit section *** (ДокумПостав.НомерДогов CustomAttributes)
        public virtual int НомерДогов
        {
            get
            {
                // *** Start programmer edit section *** (ДокумПостав.НомерДогов Get start)

                // *** End programmer edit section *** (ДокумПостав.НомерДогов Get start)
                int result = this.fНомерДогов;
                // *** Start programmer edit section *** (ДокумПостав.НомерДогов Get end)

                // *** End programmer edit section *** (ДокумПостав.НомерДогов Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокумПостав.НомерДогов Set start)

                // *** End programmer edit section *** (ДокумПостав.НомерДогов Set start)
                this.fНомерДогов = value;
                // *** Start programmer edit section *** (ДокумПостав.НомерДогов Set end)

                // *** End programmer edit section *** (ДокумПостав.НомерДогов Set end)
            }
        }
        
        /// <summary>
        /// Докум постав.
        /// </summary>
        // *** Start programmer edit section *** (ДокумПостав.Клиенты CustomAttributes)

        // *** End programmer edit section *** (ДокумПостав.Клиенты CustomAttributes)
        [PropertyStorage(new string[] {
                "Клиенты"})]
        [NotNull()]
        public virtual IIS.Probaraz.Клиенты Клиенты
        {
            get
            {
                // *** Start programmer edit section *** (ДокумПостав.Клиенты Get start)

                // *** End programmer edit section *** (ДокумПостав.Клиенты Get start)
                IIS.Probaraz.Клиенты result = this.fКлиенты;
                // *** Start programmer edit section *** (ДокумПостав.Клиенты Get end)

                // *** End programmer edit section *** (ДокумПостав.Клиенты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокумПостав.Клиенты Set start)

                // *** End programmer edit section *** (ДокумПостав.Клиенты Set start)
                this.fКлиенты = value;
                // *** Start programmer edit section *** (ДокумПостав.Клиенты Set end)

                // *** End programmer edit section *** (ДокумПостав.Клиенты Set end)
            }
        }
        
        /// <summary>
        /// Докум постав.
        /// </summary>
        // *** Start programmer edit section *** (ДокумПостав.Организация CustomAttributes)

        // *** End programmer edit section *** (ДокумПостав.Организация CustomAttributes)
        [PropertyStorage(new string[] {
                "Организация"})]
        [NotNull()]
        public virtual IIS.Probaraz.Организация Организация
        {
            get
            {
                // *** Start programmer edit section *** (ДокумПостав.Организация Get start)

                // *** End programmer edit section *** (ДокумПостав.Организация Get start)
                IIS.Probaraz.Организация result = this.fОрганизация;
                // *** Start programmer edit section *** (ДокумПостав.Организация Get end)

                // *** End programmer edit section *** (ДокумПостав.Организация Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокумПостав.Организация Set start)

                // *** End programmer edit section *** (ДокумПостав.Организация Set start)
                this.fОрганизация = value;
                // *** Start programmer edit section *** (ДокумПостав.Организация Set end)

                // *** End programmer edit section *** (ДокумПостав.Организация Set end)
            }
        }
        
        /// <summary>
        /// Докум постав.
        /// </summary>
        // *** Start programmer edit section *** (ДокумПостав.ИнфорОЗаказе CustomAttributes)

        // *** End programmer edit section *** (ДокумПостав.ИнфорОЗаказе CustomAttributes)
        public virtual IIS.Probaraz.DetailArrayOfИнфорОЗаказе ИнфорОЗаказе
        {
            get
            {
                // *** Start programmer edit section *** (ДокумПостав.ИнфорОЗаказе Get start)

                // *** End programmer edit section *** (ДокумПостав.ИнфорОЗаказе Get start)
                if ((this.fИнфорОЗаказе == null))
                {
                    this.fИнфорОЗаказе = new IIS.Probaraz.DetailArrayOfИнфорОЗаказе(this);
                }
                IIS.Probaraz.DetailArrayOfИнфорОЗаказе result = this.fИнфорОЗаказе;
                // *** Start programmer edit section *** (ДокумПостав.ИнфорОЗаказе Get end)

                // *** End programmer edit section *** (ДокумПостав.ИнфорОЗаказе Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокумПостав.ИнфорОЗаказе Set start)

                // *** End programmer edit section *** (ДокумПостав.ИнфорОЗаказе Set start)
                this.fИнфорОЗаказе = value;
                // *** Start programmer edit section *** (ДокумПостав.ИнфорОЗаказе Set end)

                // *** End programmer edit section *** (ДокумПостав.ИнфорОЗаказе Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ДокумПоставE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДокумПоставE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДокумПоставE", typeof(IIS.Probaraz.ДокумПостав));
                }
            }
            
            /// <summary>
            /// "ДокумПоставL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДокумПоставL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДокумПоставL", typeof(IIS.Probaraz.ДокумПостав));
                }
            }
        }
    }
}
