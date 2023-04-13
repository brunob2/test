function PixIspbSelect2Controller() {
    var a = this;
    this.reference = null;
    this.init = function() {
        function c(a) {
            return a.corporateName
        }
        a.reference && a.reference.find("#pix-ispb").select2({
            placeholder: "Selecione uma institui\u00e7\u00e3o",
            minimumInputLength: 0,
            minimumResultsForSearch: 10,
            ajax: {
                url: "/pixTransaction/getInstitutions",
                dataType: "json",
                data: function(a, c) {
                    return {
                        corporateName: a
                    }
                },
                results: function(a, c) {
                    c = [];
                    for (var b = 0; b < a.length; b++)
                        c.push({
                            id: a[b].ispb,
                            corporateName: a[b].corporateName,
                            ispb: a[b].ispb
                        });
                    return {
                        results: c
                    }
                }
            },
            initSelection: function(a, c) {
                a = $(a).val();
                c({
                    ispb: a
                })
            },
            formatResult: c,
            formatSelection: c,
            formatNoMatches: function() {
                return "Institui\u00e7\u00e3o n\u00e3o encontrada."
            },
            formatSearching: function() {
                return "Buscando..."
            }
        })
    }
    ;
    this.reset = function() {
        a.reference.find("#pix-ispb").select2("val", "")
    }
}
function TransferUtils() {
    this.validateWizardPixTransactionValue = function(a, c) {
        if (0 >= a)
            return {
                error: !0,
                message: "Informe um valor maior que R$ 0,00."
            };
        if (c)
            return {
                error: !1
            };
        c = wizardTransferModalStore.getState().pixTransactionCheckoutLimitInfo.limitPerTransaction;
        var b = wizardTransferModalStore.getState().pixTransactionCheckoutLimitInfo.bankAccountInfoCheckoutLimit
          , k = wizardTransferModalStore.getState().pixTransactionCheckoutLimitInfo.bankAccountInfoCheckoutLimitRemainingDailyLimit
          , g = wizardTransferModalStore.getState().pixTransactionCheckoutLimitInfo.remainingLimitPerPeriod
          , h = wizardTransferModalStore.getState().pixTransactionCheckoutLimitInfo.customerAvailableDailyLimit
          , f = wizardTransferModalStore.getState().pixTransactionCheckoutLimitInfo.customerBalance
          , l = wizardTransferModalStore.getState().pixTransactionCheckoutLimitInfo.pixDebitFee
          , m = wizardTransferModalStore.getState().pixTransactionCheckoutLimitInfo.isDaytime;
        return transferUtils.validatePixTransactionValue(c, g, h, f, l, m, a, b, k)
    }
    ;
    this.validatePixTransactionValue = function(a, c, b, k, g, h, f, l, m) {
        if (0 >= f)
            return {
                error: !0,
                message: "Informe um valor maior que R$ 0,00."
            };
        var n = f;
        0 < g && (n = f + g);
        if (n > k)
            return h = "Saldo insuficiente. Por favor, escolha outro valor.",
            0 < g && (h += " Taxa de transa\u00e7\u00e3o de " + moneyUtils.getValueWithMonetarySymbol(g) + "."),
            {
                error: !0,
                message: h
            };
        if (void 0 !== l && null !== l) {
            if (f > l)
                return {
                    error: !0,
                    message: "O valor solicitado excede o limite di\u00e1rio de " + moneyUtils.getValueWithMonetarySymbol(l) + " em transa\u00e7\u00f5es Pix para esta conta banc\u00e1ria."
                };
            if (f > m)
                return {
                    error: !0,
                    message: "Restam " + moneyUtils.getValueWithMonetarySymbol(m) + " do seu limite Pix para esta conta banc\u00e1ria e o valor informado excede seu limite atual."
                }
        } else {
            if (f > a)
                return h = "Limite por transa\u00e7\u00e3o em hor\u00e1rio " + (h ? "diurno" : "noturno") + (" de " + moneyUtils.getValueWithMonetarySymbol(a) + ". Por favor, escolha outro valor."),
                {
                    error: !0,
                    message: h
                };
            if (n > b)
                return g = b - g,
                0 > g && (g = 0),
                {
                    error: !0,
                    message: "Restam " + moneyUtils.getValueWithMonetarySymbol(g) + " do seu limite di\u00e1rio e o valor digitado excede seu limite atual."
                };
            if (n > c)
                return g = c - g,
                0 > g && (g = 0),
                h = h ? "diurno" : "noturno",
                {
                    error: !0,
                    message: "Restam " + moneyUtils.getValueWithMonetarySymbol(g) + " do seu limite " + h + " do Pix e o valor digitado excede seu limite atual."
                }
        }
        return {
            error: !1
        }
    }
    ;
    this.validateScheduledDate = function(a) {
        return dateUtils.validateDateFormat(a) ? dateUtils.isBeforeDate(a, dateUtils.dateToString((new Date).getTime())) ? {
            error: !0,
            message: "A data da transa\u00e7\u00e3o n\u00e3o pode ser anterior a data de hoje."
        } : {
            error: !1
        } : {
            error: !0,
            message: "Formato de data inv\u00e1lido"
        }
    }
    ;
    this.isEquivalentToCpfAndPhone = function(d) {
        d = d.replace(/\s/g, "");
        return a(d) && c(d)
    }
    ;
    this.buildInputKey = function(d) {
        d = d.replace(/\s/g, "");
        return a(d) ? {
            valid: !0,
            pixKeyType: PixAddressKeyTypeEnum.CPF
        } : (new RegExp(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}|[\d]{14}$/)).test(d) && cpfCnpjUtils.validateCnpj(d) ? {
            valid: !0,
            pixKeyType: PixAddressKeyTypeEnum.CNPJ
        } : c(d) ? {
            valid: !0,
            pixKeyType: PixAddressKeyTypeEnum.PHONE
        } : stringUtils.validateEmail(d) ? {
            valid: !0,
            pixKeyType: PixAddressKeyTypeEnum.EMAIL
        } : (new RegExp(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-4[a-fA-F0-9]{3}-[89abAB][a-fA-F0-9]{3}-[a-fA-F0-9]{12}/)).test(d) ? {
            valid: !0,
            pixKeyType: PixAddressKeyTypeEnum.EVP
        } : {
            valid: !1
        }
    }
    ;
    this.isScheduledTransaction = function(a) {
        return dateUtils.isAfterToday(a)
    }
    ;
    var a = function(a) {
        return (new RegExp(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$|[0-9]{11}$/)).test(a) && cpfCnpjUtils.validateCpf(a)
    }
      , c = function(a) {
        return (new RegExp(/^(\+(5){2})?\s?\(?[1-9]{2}\)?\s?9\d{4}\-?\d{4}$/)).test(a)
    }
}
var transferUtils;
$(document).ready(function() {
    transferUtils = new TransferUtils
});
"use strict";
function _defineProperty(a, c, d) {
    c in a ? Object.defineProperty(a, c, {
        value: d,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[c] = d;
    return a
}
var transferInfoDefaultState = {
    pixKey: "",
    groupId: 0,
    value: 0,
    financialInstitutionName: "",
    name: "",
    account: "",
    agency: "",
    cpfCnpj: "",
    personType: "",
    isValidateKey: null,
    scheduledDate: new Date,
    description: "",
    toBankAccount: null,
    isTransferToSameOwnership: null,
    financialInstitutionId: null,
    accountType: "",
    accountTypeName: "",
    saveBankAccount: null,
    bankAccountInfoId: null,
    authorizeSynchronous: !1,
    transferType: TransferTypeEnum.PIX
}
  , pixTransactionCheckoutLimitInfoDefaultState = {
    limitPerTransaction: 0,
    remainingLimitPerPeriod: 0,
    pixDebitFee: 0,
    customerAvailableDailyLimit: 0,
    bankAccountInfoCheckoutLimit: null,
    bankAccountInfoCheckoutLimitRemainingDailyLimit: null,
    customerBalance: 0,
    isDaytime: !1
}
  , transferInfoDefault = Object.assign({}, transferInfoDefaultState)
  , transferInfo = function() {
    var a = buildReducerState(arguments, {})
      , c = arguments[1];
    switch (c.type) {
    case "SET_VALUE":
        return Object.assign({}, a, _defineProperty({}, c.name, c.value));
    case "RESET_STATE":
        return transferInfoDefault;
    default:
        return a
    }
}
  , pixTransactionCheckoutLimitInfo = function() {
    var a = buildReducerState(arguments, {})
      , c = arguments[1];
    switch (c.type) {
    case "SET_LIMIT_VALUE":
        return Object.assign({}, a, _defineProperty({}, c.name, c.value));
    case "RESET_LIMIT_STATE":
        return pixTransactionCheckoutLimitInfoDefaultState;
    default:
        return a
    }
}
  , wizardTransferModalConfig = function() {
    var a = buildReducerState(arguments, {
        currentStep: null,
        feedbackMessages: []
    })
      , c = arguments[1];
    switch (c.type) {
    case "SET_CONFIG_VALUE":
        return Object.assign({}, a, _defineProperty({}, c.name, c.value));
    case "SET_CURRENT_STEP":
        return Object.assign({}, a, {
            currentStep: c.step
        });
    case "ADD_FEEDBACK_ERROR":
        var d = a.feedbackMessages;
        d.push({
            message: c.message,
            reference: c.reference
        });
        return Object.assign({}, a, {
            feedbackMessages: d
        });
    case "ADD_FEEDBACK_ERROR_LIST":
        return Object.assign({}, a, {
            feedbackMessages: a.feedbackMessages.concat(c.feedbackMessages)
        });
    case "CLEAN_FEEDBACK_ERROR":
        return Object.assign({}, a, {
            feedbackMessages: []
        });
    default:
        return a
    }
}
  , app = combineReducers({
    transferInfo: transferInfo,
    wizardTransferModalConfig: wizardTransferModalConfig,
    pixTransactionCheckoutLimitInfo: pixTransactionCheckoutLimitInfo
})
  , wizardTransferModalStore = createStore(app);
function WizardTransferModalController() {
    this.reference = $(".js-create-pix-transaction");
    this.previousStepButtonReference = this.reference.find(".js-prev-step");
    this.nextStepButtonReference = this.reference.find(".js-next-step");
    this.submitButtonReference = this.reference.find(".js-btn-submit");
    this.closeButtonReference = this.reference.find(".js-close");
    this.finishButtonReference = this.reference.find(".js-btn-finish-button");
    var a = this.reference.find(".js-btn-authorize-later"), c = this.reference.find(".js-btn-authorize"), d = this.reference.find(".js-token"), e = !1, b = this, k, g = new BaseController, h = new ButtonController, f = new BaseWizardController(b.reference);
    f.setState = b.setState;
    var l = !1;
    b.isCheckoutOnlyForBankAccountAlreadyRegistered = b.reference.find(".js-is-checkout-only-for-bank-account-already-registered").data("value");
    this.init = function() {
        wizardTransferModalStore.dispatch({
            type: "SET_CONFIG_VALUE",
            name: "getKeyUrl",
            value: b.reference.data("get-key-url")
        });
        wizardTransferModalStore.dispatch({
            type: "SET_CONFIG_VALUE",
            name: "requestTokenUrl",
            value: b.reference.data("request-token-url")
        });
        wizardTransferModalStore.dispatch({
            type: "SET_CONFIG_VALUE",
            name: "redirectUrl",
            value: b.reference.data("redirect-url")
        });
        wizardTransferModalStore.dispatch({
            type: "SET_CONFIG_VALUE",
            name: "resendTokenUrl",
            value: b.reference.data("resend-token-url")
        });
        wizardTransferModalStore.dispatch({
            type: "SET_CONFIG_VALUE",
            name: "authorizeUrl",
            value: b.reference.data("authorize-url")
        });
        wizardTransferModalStore.dispatch({
            type: "SET_CONFIG_VALUE",
            name: "saveAddressKeyDebit",
            value: b.reference.data("save-address-key-debit-url")
        });
        wizardTransferModalStore.dispatch({
            type: "SET_CONFIG_VALUE",
            name: "saveManualDebit",
            value: b.reference.data("save-manual-debit-url")
        });
        wizardTransferModalStore.dispatch({
            type: "SET_CONFIG_VALUE",
            name: "selectBankAccountTableUrl",
            value: b.reference.attr("data-get-bank-account-info-url")
        });
        wizardTransferModalStore.dispatch({
            type: "SET_CONFIG_VALUE",
            name: "saveTransferUrl",
            value: b.reference.data("save-transfer-url")
        });
        wizardTransferModalStore.dispatch({
            type: "SET_CONFIG_VALUE",
            name: "getAuthorizationDeviceInfoUrl",
            value: b.reference.find(".js-critical-action-alert").attr("data-url")
        });
        wizardTransferModalStore.dispatch({
            type: "SET_CONFIG_VALUE",
            name: "findBankAccountInfoCheckoutLimitUrl",
            value: b.reference.data("find-bank-account-info-checkout-limit-url")
        });
        wizardTransferModalStore.dispatch({
            type: "SET_CONFIG_VALUE",
            name: "getFeeUrl",
            value: b.reference.data("get-fee-url")
        });
        wizardTransferModalStore.dispatch({
            type: "SET_CONFIG_VALUE",
            name: "resolveTransferTypeUrl",
            value: b.reference.data("resolve-transfer-type-url")
        });
        wizardTransferModalStore.dispatch({
            type: "SET_CONFIG_VALUE",
            name: "allowsTransferTypeTed",
            value: b.reference.data("allows-transfer-type-ted")
        });
        wizardTransferModalStore.dispatch({
            type: "SET_CONFIG_VALUE",
            name: "validateValueUrl",
            value: b.reference.data("validate-value-url")
        });
        var a = moneyUtils.maskedStringToNumberMoney(b.reference.find(".js-customer-available-daily-limit").val())
          , e = moneyUtils.maskedStringToNumberMoney(b.reference.find(".js-pix-remaining-limit-per-period").val())
          , g = moneyUtils.maskedStringToNumberMoney(b.reference.find(".js-pix-limit-per-transaction").val())
          , h = moneyUtils.maskedStringToNumberMoney(b.reference.find(".js-customer-balance").val())
          , f = moneyUtils.maskedStringToNumberMoney(b.reference.find(".js-pix-debit-fee").val())
          , m = b.reference.find(".js-is-daytime").data("value");
        b.setLimitState({
            name: "customerAvailableDailyLimit",
            value: a
        });
        b.setLimitState({
            name: "remainingLimitPerPeriod",
            value: e
        });
        b.setLimitState({
            name: "limitPerTransaction",
            value: g
        });
        b.setLimitState({
            name: "customerBalance",
            value: h
        });
        b.setLimitState({
            name: "pixDebitFee",
            value: f
        });
        b.setLimitState({
            name: "isDaytime",
            value: m
        });
        wizardTransferModalActions = new WizardTransferModalActions;
        wizardSelectOriginTypeStep = new WizardSelectOriginTypeStep;
        wizardSelectOriginTypeStep.init(b.reference.find(".js-select-origin-type-step"));
        wizardSelectBankAccountStep = new WizardSelectBankAccountStep;
        wizardSelectBankAccountStep.init(b.reference.find(".js-select-bank-account-step"));
        wizardBankAccountTransferInfoStep = new WizardBankAccountTransactionInfoStep;
        wizardBankAccountTransferInfoStep.init(b.reference.find(".js-bank-account-transfer-info-step"));
        wizardTransferReceiverInfoStep = new WizardTransferReceiverInfoStep;
        wizardTransferReceiverInfoStep.init(b.reference.find(".js-receiver-info-step"));
        wizardTransferSummaryStep = new WizardTransferSummaryStep;
        wizardTransferSummaryStep.init(b.reference.find(".js-summary-step"));
        wizardTransferCriticalActionStep = new WizardTransferCriticalActionStep;
        wizardTransferCriticalActionStep.init(b.reference.find(".js-critical-action-confirm-token-step"));
        wizardTransferAlertStep = new WizardTransferAlertStep;
        wizardTransferAlertStep.init(b.reference.find(".js-success-transaction-step"));
        wizardPixScheduledTransactionAlertStep = new WizardTransferAlertStep;
        wizardPixScheduledTransactionAlertStep.init(b.reference.find(".js-success-scheduled-transaction-step"));
        pixIspbSelect2Controller = new PixIspbSelect2Controller;
        pixIspbSelect2Controller.reference = b.reference;
        pixIspbSelect2Controller.init();
        wizardPixTransactionInAnalysisStep = new WizardTransferInAnalysisStep;
        wizardPixTransactionInAnalysisStep.init(b.reference.find(".js-in-analysis-transaction-step"));
        k = wizardSelectOriginTypeStep.reference;
        n();
        c.on("click", p);
        t();
        eventBinder.bindEnterKeypressOnInput(d, p);
        b.changeStep(k);
        q("render");
        b.showCriticalActionAlertIfNecessary()
    }
    ;
    this.changeStep = function(a) {
        var b = wizardTransferModalStore.getState().wizardTransferModalConfig.currentStep;
        b && b.hide();
        wizardTransferModalStore.dispatch({
            type: "SET_CURRENT_STEP",
            step: a
        });
        a.show()
    }
    ;
    this.showPreviousButton = function() {
        b.previousStepButtonReference.show()
    }
    ;
    this.hidePreviousButton = function() {
        b.previousStepButtonReference.hide()
    }
    ;
    this.showNextButton = function() {
        b.nextStepButtonReference.show()
    }
    ;
    this.showCloseButton = function() {
        b.closeButtonReference.show()
    }
    ;
    this.hideCloseButton = function() {
        b.closeButtonReference.hide()
    }
    ;
    this.hideNextButton = function() {
        b.nextStepButtonReference.hide()
    }
    ;
    this.showSubmitButton = function() {
        b.submitButtonReference.show()
    }
    ;
    this.hideFinishButton = function() {
        b.finishButtonReference.hide()
    }
    ;
    this.showFinishButton = function() {
        b.finishButtonReference.show()
    }
    ;
    this.disableSubmitButton = function() {
        b.submitButtonReference.prop("disabled", !0);
        b.submitButtonReference.addClass("disabled")
    }
    ;
    this.enableSubmitButton = function() {
        b.submitButtonReference.removeProp("disabled");
        b.submitButtonReference.removeClass("disabled")
    }
    ;
    this.hideSubmitButton = function() {
        b.submitButtonReference.hide()
    }
    ;
    this.showAuthorizeLaterButton = function() {
        a.show()
    }
    ;
    this.hideAuthorizeLaterButton = function() {
        a.hide()
    }
    ;
    this.showAuthorizeButton = function() {
        c.show()
    }
    ;
    this.hideAuthorizeButton = function() {
        c.hide()
    }
    ;
    this.setState = function(a) {
        wizardTransferModalStore.dispatch({
            type: "SET_VALUE",
            name: a.name,
            value: a.value
        })
    }
    ;
    this.reset = function() {
        wizardTransferModalStore.dispatch({
            type: "RESET_STATE"
        });
        wizardTransferReceiverInfoStep.reset();
        wizardSelectBankAccountStep.reset();
        wizardBankAccountTransferInfoStep.reset();
        wizardTransferCriticalActionStep.reset()
    }
    ;
    this.open = function() {
        b.reset();
        e || (b.changeStep(k),
        q("render"));
        b.reference.modal({
            backdrop: "static",
            keyboard: !1
        })
    }
    ;
    this.showCriticalActionAlertIfNecessary = function() {
        b.isTokenRequired() && $.get(wizardTransferModalStore.getState().wizardTransferModalConfig.getAuthorizationDeviceInfoUrl, function(a) {
            !0 === a.isLocked && m()
        })
    }
    ;
    var m = function() {
        e = !0;
        b.reference.find(".js-critical-action-alert").show();
        b.reference.find(".js-modal-steps").hide();
        b.reference.find(".js-transfer-modal-title").text("Autoriza\u00e7\u00f5es bloqueadas");
        b.hideSubmitButton();
        b.hideNextButton();
        b.hidePreviousButton();
        b.showCloseButton();
        b.hideAuthorizeLaterButton();
        b.hideAuthorizeButton()
    };
    this.setLimitState = function(a) {
        wizardTransferModalStore.dispatch({
            type: "SET_LIMIT_VALUE",
            name: a.name,
            value: a.value
        })
    }
    ;
    var n = function() {
        a.on("click", function(a) {
            a.preventDefault();
            h.buttonReference = $(this);
            h.disable();
            a = {
                messageType: MessageTypeEnum.WARNING,
                message: wizardTransferModalStore.getState().transferInfo.authorizationIsRequiredWarning
            };
            refreshPage($.param(a))
        })
    }
      , p = function() {
        q("submitStep");
        (l = b.reference.find(".js-authorization-device-type-is-mobile-app-token").data("value")) && void 0 === wizardTransferModalStore.getState().transferInfo.criticalActionGroupId ? wizardTransferCriticalActionStep.sendToken(function() {
            w()
        }) : w()
    }
      , t = function() {
        b.nextStepButtonReference.off("click");
        b.nextStepButtonReference.on("click", function(a) {
            a.preventDefault();
            u()
        });
        b.previousStepButtonReference.off("click");
        b.previousStepButtonReference.on("click", function(a) {
            a.preventDefault();
            if (a = q("calculatePreviousStep"))
                b.changeStep(a),
                q("render")
        });
        b.submitButtonReference.off("click");
        b.submitButtonReference.on("click", function(a) {
            a.preventDefault();
            r()
        });
        b.finishButtonReference.on("click", function(a) {
            a.preventDefault();
            h.buttonReference = $(this);
            h.disable();
            window.location = wizardTransferModalStore.getState().wizardTransferModalConfig.redirectUrl
        })
    }
      , r = function() {
        q("submitStep");
        if (q("validate")) {
            h.buttonReference = b.submitButtonReference;
            h.disable();
            var a = wizardTransferModalStore.getState().transferInfo;
            if ("CPF" == a.addressKeyType || "CNPJ" == a.addressKeyType || "PHONE" == a.addressKeyType)
                a.pixKey = a.pixKey.replace(/[^0-9,]*/g, "");
            var c = b.reference.find(".js-icarus-close");
            c.hide();
            wizardTransferModalActions.saveTransaction(a, function(a) {
                a.success ? (b.setState({
                    name: "isInAnalysis",
                    value: a.isInAnalysis
                }),
                b.setState({
                    name: "estimatedDebitDate",
                    value: a.estimatedDebitDate
                }),
                b.setState({
                    name: "authorizationIsRequiredWarning",
                    value: a.authorizationIsRequiredWarning
                }),
                b.setState({
                    name: "criticalActionId",
                    value: a.criticalActionId
                }),
                h.enable(),
                u()) : (h.enable(),
                asaasMessagePrinter.show(a.messageHtml),
                c.show())
            })
        }
    }
      , u = function() {
        q("submitStep");
        asaasMessagePrinter.clear();
        if (q("validate")) {
            var a = q("calculateNextStep");
            a && (b.changeStep(a),
            q("render"))
        }
    }
      , q = function(a) {
        var b;
        return (b = wizardTransferModalStore.getState().wizardTransferModalConfig.currentStep.data("controller-name")) ? g.executeFunctionByName(b + "." + a, window) : !0
    };
    this.setModalTitle = function(a) {
        b.reference.find(".js-transfer-modal-title").html(a)
    }
    ;
    this.isScheduledTransaction = function(a) {
        return dateUtils.isAfterToday(a || wizardTransferModalStore.getState().transferInfo.scheduledDate)
    }
    ;
    this.isTokenRequired = function() {
        return TransferTypeEnum.isPix(wizardTransferModalStore.getState().transferInfo.transferType) ? this.reference.find(".js-transfer-pix-has-enabled-critical-action").data("value") : this.reference.find(".js-transfer-ted-has-enabled-critical-action").data("value")
    }
    ;
    this.showAuthorizationButtonsIfNecessary = function() {
        b.isTokenRequired() ? (b.reference.find(".js-critical-action-btn-box").show(),
        b.reference.find(".js-critical-action-disabled-btn-box").hide()) : (b.reference.find(".js-critical-action-btn-box").hide(),
        b.reference.find(".js-critical-action-disabled-btn-box").show())
    }
    ;
    this.isInAnalysis = function() {
        return wizardTransferModalStore.getState().transferInfo.isInAnalysis
    }
    ;
    var w = function() {
        var a = {
            id: wizardTransferModalStore.getState().transferInfo.criticalActionGroupId,
            authorizationToken: wizardTransferModalStore.getState().transferInfo.token
        };
        wizardTransferModalActions.authorize(a, function(a) {
            a.success && a.authorized && (b.setState({
                name: "isInAnalysis",
                value: a.isInAnalysis
            }),
            b.setState({
                name: "estimatedDebitDate",
                value: a.estimatedDebitDate
            }),
            h.enable(),
            u());
            !0 === a.maxAttemptsExceeded ? m() : (h.enable(),
            f.removeAllFeedbackMessage(),
            wizardTransferModalStore.dispatch({
                type: "CLEAN_FEEDBACK_ERROR"
            }),
            wizardTransferModalStore.dispatch({
                type: "ADD_FEEDBACK_ERROR",
                message: a.message.text,
                reference: d
            }),
            a = wizardTransferModalStore.getState().wizardTransferModalConfig.feedbackMessages,
            f.showFeedbackMessage(a))
        })
    }
}
var wizardTransferModalController, wizardTransferModalActions, wizardSelectOriginTypeStep, wizardSelectBankAccountStep, wizardBankAccountTransferInfoStep, wizardTransferReceiverInfoStep, wizardTransferSummaryStep, wizardTransferCriticalActionStep, wizardTransferAlertStep, wizardPixTransactionInAnalysisStep, pixIspbSelect2Controller, wizardPixScheduledTransactionAlertStep;
$(document).ready(function() {
    wizardTransferModalController = new WizardTransferModalController;
    wizardTransferModalController.init()
});
function WizardTransferModalActions() {
    this.getKey = function(a, c) {
        var d = wizardTransferModalStore.getState().wizardTransferModalConfig.getKeyUrl;
        $.get(d, a).done(function(a) {
            c(a)
        })
    }
    ;
    this.requestToken = function(a, c) {
        var d = wizardTransferModalStore.getState().wizardTransferModalConfig.requestTokenUrl;
        $.post(d, a).done(function(a) {
            c(a)
        })
    }
    ;
    this.resendToken = function(a, c) {
        var d = wizardTransferModalStore.getState().wizardTransferModalConfig.resendTokenUrl;
        $.post(d, a).done(function(a) {
            c(a)
        })
    }
    ;
    this.saveTransaction = function(a, c) {
        var d = wizardTransferModalStore.getState().transferInfo.pixKey ? wizardTransferModalStore.getState().wizardTransferModalConfig.saveAddressKeyDebit : wizardTransferModalStore.getState().transferInfo.bankAccountInfoId ? wizardTransferModalStore.getState().wizardTransferModalConfig.saveTransferUrl : wizardTransferModalStore.getState().wizardTransferModalConfig.saveManualDebit;
        $.post(d, a).done(function(a) {
            c(a)
        })
    }
    ;
    this.authorize = function(a, c) {
        var d = wizardTransferModalStore.getState().wizardTransferModalConfig.authorizeUrl;
        $.post(d, a).done(function(a) {
            c(a)
        })
    }
    ;
    this.findBankAccountInfoCheckoutLimit = function(a, c) {
        $.ajax({
            url: wizardTransferModalStore.getState().wizardTransferModalConfig.findBankAccountInfoCheckoutLimitUrl,
            type: "GET",
            data: a,
            dataType: "json",
            async: !1
        }).done(function(a) {
            c(a)
        })
    }
    ;
    this.getTransferType = function(a, c) {
        $.ajax({
            url: wizardTransferModalStore.getState().wizardTransferModalConfig.resolveTransferTypeUrl,
            type: "GET",
            data: a,
            dataType: "json",
            async: !1
        }).done(function(a) {
            c(a)
        })
    }
    ;
    this.getFee = function(a, c) {
        $.ajax({
            url: wizardTransferModalStore.getState().wizardTransferModalConfig.getFeeUrl,
            type: "GET",
            data: a,
            dataType: "json",
            async: !1
        }).done(function(a) {
            c(a)
        })
    }
    ;
    this.validateValue = function(a, c) {
        $.ajax({
            url: wizardTransferModalStore.getState().wizardTransferModalConfig.validateValueUrl,
            type: "POST",
            data: a,
            dataType: "json",
            async: !1
        }).done(function(a) {
            c(a)
        })
    }
}
function WizardSelectOriginTypeStep() {
    var a = this, c, d, e;
    this.init = function(b) {
        a.reference = b;
        c = new BaseWizardController(a.reference);
        d = a.reference.find(".js-pix-transfer-type-cards");
        (e = wizardTransferModalController.isCheckoutOnlyForBankAccountAlreadyRegistered) ? a.reference.find(".js-input-pix-transfer-to-bank-account").iCheck("check") : a.reference.find(".js-input-pix-transfer-with-receiver-info").iCheck("check");
        e && (a.reference.find(".js-input-pix-transfer-with-receiver-info").iCheck("disable"),
        a.reference.find(".js-input-pix-transfer-with-receiver-info").iCheck("uncheck"))
    }
    ;
    this.render = function() {
        wizardTransferModalController.hidePreviousButton();
        wizardTransferModalController.showCloseButton();
        wizardTransferModalController.showNextButton();
        wizardTransferModalController.hideFinishButton();
        wizardTransferModalController.hideSubmitButton();
        wizardTransferModalController.hideAuthorizeLaterButton();
        wizardTransferModalController.hideAuthorizeButton();
        wizardTransferModalController.nextStepButtonReference.attr("disabled", !1)
    }
    ;
    this.validate = function() {
        var a;
        c.removeAllFeedbackMessage();
        wizardTransferModalStore.dispatch({
            type: "CLEAN_FEEDBACK_ERROR"
        });
        b().length || wizardTransferModalStore.dispatch({
            type: "ADD_FEEDBACK_ERROR",
            message: "Selecione uma op\u00e7\u00e3o",
            reference: d
        });
        a = wizardTransferModalStore.getState().wizardTransferModalConfig.feedbackMessages;
        if (0 == a.length)
            return !0;
        c.showFeedbackMessage(a);
        return !1
    }
    ;
    this.submitStep = function() {
        "toBankAccount" === b().val() ? (wizardTransferModalStore.dispatch({
            type: "SET_VALUE",
            name: "pixKey",
            value: ""
        }),
        wizardTransferModalStore.dispatch({
            type: "SET_VALUE",
            name: "toBankAccount",
            value: !0
        })) : wizardTransferModalStore.dispatch({
            type: "SET_VALUE",
            name: "toBankAccount",
            value: !1
        })
    }
    ;
    this.calculateNextStep = function() {
        return wizardTransferModalStore.getState().transferInfo.toBankAccount ? wizardSelectBankAccountStep.reference : wizardTransferReceiverInfoStep.reference
    }
    ;
    this.calculatePreviousStep = function() {
        return null
    }
    ;
    this.reset = function() {
        c.removeAllFeedbackMessage()
    }
    ;
    var b = function() {
        return a.reference.find(".js-pix-transfer-type:checked")
    }
}
function WizardSelectBankAccountStep() {
    var a = this, c, d, e;
    this.init = function(b) {
        a.reference = b;
        new BaseWizardController(a.reference);
        e = a.reference.find(".js-bank-account-search");
        wizardTransferModalController.isCheckoutOnlyForBankAccountAlreadyRegistered && a.reference.find(".js-pix-transfer-to-new-bank-account-option").addClass("hide");
        m()
    }
    ;
    this.render = function() {
        wizardTransferModalController.showPreviousButton();
        wizardTransferModalController.showNextButton();
        wizardTransferModalController.hideCloseButton();
        wizardTransferModalController.hideFinishButton();
        wizardTransferModalController.hideSubmitButton();
        wizardTransferReceiverInfoStep.reset();
        wizardBankAccountTransferInfoStep.reset();
        k();
        b();
        g();
        eventBinder.bindEnterKeypressOnInput(e, l);
        a.reference.find(".js-search-bank-account").on("click", l);
        fieldValidator.applyConstraints(a.reference.find(".js-radio-select-bank-account"));
        a.reference.find(".js-radio-select-bank-account-item:checked").length ? wizardTransferModalController.nextStepButtonReference.attr("disabled", !1) : wizardTransferModalController.nextStepButtonReference.attr("disabled", !0)
    }
    ;
    this.validate = function() {
        return d ? wizardTransferModalStore.getState().transferInfo.transferType ? !0 : (asaasMessagePrinter.show("Ocorreu um erro desconhecido ao determinar o tipo de transfer\u00eancia. Por favor tente novamente.", MessageTypeEnum.ERROR),
        !1) : !1
    }
    ;
    this.submitStep = function() {
        var a = c.find(function(a) {
            return a.id == d
        });
        wizardTransferModalController.setState({
            name: "name",
            value: a.name
        });
        wizardTransferModalController.setState({
            name: "cpfCnpj",
            value: a.cpfCnpj
        });
        wizardTransferModalController.setState({
            name: "financialInstitutionName",
            value: a.financialInstitutionName
        });
        wizardTransferModalController.setState({
            name: "financialInstitutionId",
            value: a.financialInstitutionId
        });
        wizardTransferModalController.setState({
            name: "isTransferToSameOwnership",
            value: !a.thirdPartyAccount
        });
        wizardTransferModalController.setState({
            name: "agency",
            value: a.agency
        });
        wizardTransferModalController.setState({
            name: "account",
            value: a.account
        });
        wizardTransferModalController.setState({
            name: "accountType",
            value: a.bankAccountType
        });
        wizardTransferModalController.setState({
            name: "accountTypeName",
            value: a.bankAccountTypeName
        });
        wizardTransferModalController.setState({
            name: "responsiblePhone",
            value: a.responsiblePhone
        });
        wizardTransferModalController.setState({
            name: "responsibleEmail",
            value: a.responsibleEmail
        });
        wizardTransferModalController.setState({
            name: "bankAccountInfoId",
            value: a.id
        });
        n()
    }
    ;
    this.calculateNextStep = function() {
        return wizardBankAccountTransferInfoStep.reference
    }
    ;
    this.calculatePreviousStep = function() {
        return wizardSelectOriginTypeStep.reference
    }
    ;
    this.reset = function() {
        wizardTransferModalController.setState({
            name: "toBankAccount",
            value: !1
        });
        e.val("")
    }
    ;
    var b = function() {
        a.reference.find(".js-radio-select-bank-account").on("ifClicked", function() {
            d = $(this).attr("data-id");
            wizardTransferModalController.nextStepButtonReference.attr("disabled", !1)
        })
    }
      , k = function() {
        $.ajax({
            url: wizardTransferModalStore.getState().wizardTransferModalConfig.selectBankAccountTableUrl,
            type: "GET",
            async: !1,
            success: function(b) {
                c = b.bankAccountList;
                a.reference.find(".js-table-select-bank-account").html(b.htmlTemplate)
            }
        })
    }
      , g = function() {
        a.reference.find(".js-table-select-bank-account-paginate a").on("click", function(a) {
            a.preventDefault();
            h($(this))
        })
    }
      , h = function(a) {
        a = a.attr("href");
        $.get(a, function(a) {
            f(a)
        })
    }
      , f = function(d) {
        a.reference.find(".js-table-select-bank-account").fadeOut("fast", function() {
            $(this).html(d.htmlTemplate).fadeIn("slow");
            c = d.bankAccountList;
            g();
            b();
            fieldValidator.applyConstraints(a.reference.find(".js-radio-select-bank-account"));
            wizardTransferModalController.nextStepButtonReference.attr("disabled", !0)
        })
    }
      , l = function() {
        var a = e.serialize();
        $.post(wizardTransferModalStore.getState().wizardTransferModalConfig.selectBankAccountTableUrl, a, function(a) {
            f(a)
        })
    }
      , m = function() {
        a.reference.find(".js-show-address-key-modal").on("click", function() {
            a.reset();
            wizardTransferModalController.changeStep(wizardTransferReceiverInfoStep.reference)
        })
    }
      , n = function() {
        if (wizardTransferModalStore.getState().wizardTransferModalConfig.allowsTransferTypeTed) {
            var a = wizardTransferModalStore.getState().transferInfo;
            wizardTransferModalActions.getTransferType({
                bankAccountInfoId: a.bankAccountInfoId,
                value: a.value
            }, function(a) {
                a.success ? (wizardTransferModalController.setState({
                    name: "transferType",
                    value: a.transferType
                }),
                wizardTransferModalController.setState({
                    name: "transferTypeReason",
                    value: a.transferTypeReason
                })) : wizardTransferModalController.setState({
                    name: "transferType",
                    value: null
                })
            })
        }
    }
}
function WizardBankAccountTransactionInfoStep() {
    var a = this, c, d, e, b, k, g, h, f;
    this.init = function(p) {
        a.reference = p;
        c = new BaseWizardController(a.reference);
        c.setState = wizardTransferModalController.setState;
        d = a.reference.find(".js-value");
        e = a.reference.find(".js-scheduled-date");
        b = a.reference.find(".js-description");
        g = a.reference.find(".js-transfer-type-ted-warning");
        k = a.reference.find(".js-description-container");
        h = a.reference.find(".js-notify-third-party-form");
        f = a.reference.find(".js-notify-third-party");
        l()
    }
    ;
    this.render = function() {
        wizardTransferModalController.showPreviousButton();
        wizardTransferModalController.showNextButton();
        wizardTransferModalController.hideCloseButton();
        wizardTransferModalController.hideFinishButton();
        wizardTransferModalController.hideSubmitButton();
        a.reference.find(".js-bank-account-name-summary").html(wizardTransferModalStore.getState().transferInfo.name);
        a.reference.find(".js-bank-account-cpf-cnpj-summary").html(wizardTransferModalStore.getState().transferInfo.cpfCnpj);
        a.reference.find(".js-bank-account-bank-name-summary").html(wizardTransferModalStore.getState().transferInfo.financialInstitutionName);
        a.reference.find(".js-bank-account-agency").html(wizardTransferModalStore.getState().transferInfo.agency);
        a.reference.find(".js-bank-account-account").html(wizardTransferModalStore.getState().transferInfo.account);
        var b = wizardTransferModalStore.getState().transferInfo;
        TransferTypeEnum.isPix(b.transferType) ? (g.hide(),
        e.attr("disabled", !1)) : (b = g.find(".js-transfer-type-ted-warning-base-description").val(),
        b = wizardTransferModalStore.getState().transferInfo.transferTypeReason + " " + b,
        g.find(".icarus-info-box-description").html(b),
        g.show(),
        e.attr("disabled", !0),
        e.datepicker("setDate", new Date));
        p() ? k.show() : k.hide();
        m()
    }
    ;
    this.validate = function() {
        c.removeAllFeedbackMessage();
        wizardTransferModalStore.dispatch({
            type: "CLEAN_FEEDBACK_ERROR"
        });
        wizardTransferModalStore.dispatch({
            type: "ADD_FEEDBACK_ERROR_LIST",
            feedbackMessages: c.validateRequiredFields()
        });
        var a = transferUtils.validateScheduledDate(e.val());
        a.error && wizardTransferModalStore.dispatch({
            type: "ADD_FEEDBACK_ERROR",
            message: a.message,
            reference: e
        });
        a = wizardTransferModalStore.getState().transferInfo;
        "true" === a.notifyThirdPartyOnConfirmation && (a.responsibleName || wizardTransferModalStore.dispatch({
            type: "ADD_FEEDBACK_ERROR",
            message: "Informe o nome do respons\u00e1vel",
            reference: h.find(".js-responsible-name")
        }),
        a.responsiblePhone || a.responsibleEmail || wizardTransferModalStore.dispatch({
            type: "ADD_FEEDBACK_ERROR",
            message: "Informe o email ou telefone do respons\u00e1vel",
            reference: h.find(".js-responsible-email")
        }));
        wizardTransferModalActions.validateValue(a, function(a) {
            a.success || wizardTransferModalStore.dispatch({
                type: "ADD_FEEDBACK_ERROR",
                message: a.message.text,
                reference: d
            })
        });
        a = wizardTransferModalStore.getState().wizardTransferModalConfig.feedbackMessages;
        if (0 == a.length)
            return !0;
        c.showFeedbackMessage(a);
        return !1
    }
    ;
    this.submitStep = function() {
        wizardTransferModalController.setState({
            name: "originType",
            value: PixTransactionOriginTypeEnum.MANUAL
        });
        c.loadStepInfo()
    }
    ;
    this.calculateNextStep = function() {
        return wizardTransferSummaryStep.reference
    }
    ;
    this.calculatePreviousStep = function() {
        return wizardSelectBankAccountStep.reference
    }
    ;
    this.reset = function() {
        d.val("");
        e.datepicker("setDate", new Date);
        b.val("");
        c.removeAllFeedbackMessage();
        f.select2("val", "false")
    }
    ;
    var l = function() {
        f.on("change", function() {
            if (n()) {
                var a = wizardTransferModalStore.getState().transferInfo;
                h.find(".js-responsible-name").val(a.name);
                h.find(".js-responsible-phone").val(a.responsiblePhone);
                h.find(".js-responsible-email").val(a.responsibleEmail)
            }
            m()
        })
    }
      , m = function() {
        n() ? h.show() : h.hide();
        p() ? k.show() : k.hide()
    }
      , n = function() {
        return "true" === f.select2("val")
    }
      , p = function() {
        var a = wizardTransferModalStore.getState().transferInfo.transferType;
        return TransferTypeEnum.isPix(a) || TransferTypeEnum.isTed(a) && n() ? !0 : !1
    }
}
function WizardTransferReceiverInfoStep() {
    var a = this, c, d, e, b, k, g, h, f, l, m, n, p, t, r, u, q, w, x, E, z, C, A, v, y, B, D, F;
    this.init = function(P) {
        a.reference = P;
        g = this.reference.find(".js-receiver-info-type");
        b = a.reference.find(".js-address-key-info-box");
        k = a.reference.find(".js-manual-info-box");
        f = a.reference.find(".js-customer-can-save-bank-account").data("value");
        h = H();
        l = b.find(".js-address-key-type");
        m = b.find(".js-address-key-type-item");
        n = b.find(".js-description");
        p = b.find(".js-pix-key");
        t = b.find(".js-pix-information");
        r = b.find(".js-scheduled-date");
        u = b.find(".js-find-pix-key");
        w = b.find(".js-save-bank-account-box");
        q = new ButtonController;
        q.buttonReference = u;
        y = k.find(".js-pix-account-type");
        C = k.find(".js-receiver-cpfCnpj");
        A = k.find(".js-receiver-name");
        v = k.find(".js-receiver-account");
        B = k.find(".js-receiver-agency");
        x = k.find(".js-value");
        E = k.find(".js-description");
        D = k.find(".js-transfer-to-same-ownership");
        z = k.find(".js-scheduled-date");
        F = k.find(".js-save-bank-account-box");
        c = new BaseWizardController(a.reference);
        c.setState = wizardTransferModalController.setState;
        d = new BaseWizardController(b);
        d.setState = wizardTransferModalController.setState;
        e = new BaseWizardController(k);
        e.setState = wizardTransferModalController.setState;
        Q();
        J();
        R();
        S();
        T()
    }
    ;
    this.validate = function() {
        if (PixTransactionOriginTypeEnum.isAddressKey(h))
            return U();
        if (PixTransactionOriginTypeEnum.isManual(h)) {
            var b;
            b = v.val().length;
            var c = B.val().length
              , d = a.reference.find(".js-account-max-size").val()
              , g = a.reference.find(".js-account-min-size").val()
              , p = a.reference.find(".js-agency-min-size").val();
            e.removeAllFeedbackMessage();
            wizardTransferModalStore.dispatch({
                type: "CLEAN_FEEDBACK_ERROR"
            });
            if (!G()) {
                var f = cpfCnpjUtils.validateCpfCnpj(C.val());
                f.valid || wizardTransferModalStore.dispatch({
                    type: "ADD_FEEDBACK_ERROR",
                    message: f.message,
                    reference: C
                });
                A.val() || wizardTransferModalStore.dispatch({
                    type: "ADD_FEEDBACK_ERROR",
                    message: "Informe o nome do destinat\u00e1rio.",
                    reference: A
                })
            }
            b !== stringUtils.removeNonNumeric(v.val()).length && wizardTransferModalStore.dispatch({
                type: "ADD_FEEDBACK_ERROR",
                message: "Informe apenas os n\u00fameros.",
                reference: v
            });
            (b > d || b < g || 0 === Number(v.val())) && wizardTransferModalStore.dispatch({
                type: "ADD_FEEDBACK_ERROR",
                message: "Informe um n\u00famero de conta v\u00e1lido.",
                reference: v
            });
            c !== stringUtils.removeNonNumeric(B.val()).length && wizardTransferModalStore.dispatch({
                type: "ADD_FEEDBACK_ERROR",
                message: "Informe apenas n\u00fameros.",
                reference: B
            });
            (c < p || 0 === Number(B.val())) && wizardTransferModalStore.dispatch({
                type: "ADD_FEEDBACK_ERROR",
                message: "Informe um n\u00famero de ag\u00eancia v\u00e1lido.",
                reference: B
            });
            wizardTransferModalStore.dispatch({
                type: "ADD_FEEDBACK_ERROR_LIST",
                feedbackMessages: e.validateRequiredFields()
            });
            b = transferUtils.validateScheduledDate(z.val());
            b.error && wizardTransferModalStore.dispatch({
                type: "ADD_FEEDBACK_ERROR",
                message: b.message,
                reference: z
            });
            b = dateUtils.isAfterToday(z.val());
            c = moneyUtils.maskedStringToNumberMoney(x.val());
            b = transferUtils.validateWizardPixTransactionValue(c, b);
            b.error && wizardTransferModalStore.dispatch({
                type: "ADD_FEEDBACK_ERROR",
                message: b.message,
                reference: x
            });
            b = wizardTransferModalStore.getState().wizardTransferModalConfig.feedbackMessages;
            0 == b.length ? b = !0 : (e.showFeedbackMessage(b),
            b = !1);
            return b
        }
        return !1
    }
    ;
    this.render = function() {
        wizardTransferModalController.showPreviousButton();
        wizardTransferModalController.showNextButton();
        wizardTransferModalController.hideCloseButton();
        wizardTransferModalController.hideSubmitButton();
        wizardSelectBankAccountStep.reset();
        wizardBankAccountTransferInfoStep.reset();
        PixTransactionOriginTypeEnum.isAddressKey(H()) && !p.val() && wizardTransferModalController.nextStepButtonReference.attr("disabled", !0)
    }
    ;
    this.submitStep = function() {
        wizardTransferModalController.setState({
            name: "transferType",
            value: TransferTypeEnum.PIX
        });
        wizardTransferModalController.setState({
            name: "originType",
            value: h
        });
        if (PixTransactionOriginTypeEnum.isAddressKey(h))
            d.loadStepInfo(),
            wizardTransferModalController.setState({
                name: "saveBankAccount",
                value: b.find(".js-save-bank-account-checkbox").is(":checked")
            });
        else if (PixTransactionOriginTypeEnum.isManual(h)) {
            var a = pixIspbSelect2Controller.reference.find(".js-pix-ispb").select2("data");
            a && (wizardTransferModalController.setState({
                name: "financialInstitutionName",
                value: a.corporateName
            }),
            wizardTransferModalController.setState({
                name: "ispb",
                value: a.ispb
            }));
            wizardTransferModalController.setState({
                name: "accountTypeName",
                value: y.select2("data").text
            });
            wizardTransferModalController.setState({
                name: "isTransferToSameOwnership",
                value: G()
            });
            c.loadStepInfo();
            wizardTransferModalController.setState({
                name: "cpfCnpj",
                value: stringUtils.removeNonNumeric(wizardTransferModalStore.getState().transferInfo.cpfCnpj)
            });
            G() && (wizardTransferModalController.setState({
                name: "name",
                value: k.find(".js-customer-name").val()
            }),
            wizardTransferModalController.setState({
                name: "cpfCnpj",
                value: k.find(".js-customer-cpfCnpj").val()
            }));
            wizardTransferModalController.setState({
                name: "pixKey",
                value: ""
            });
            wizardTransferModalController.setState({
                name: "saveBankAccount",
                value: k.find(".js-save-bank-account-checkbox").is(":checked")
            })
        }
        a = wizardTransferModalStore.getState().transferInfo;
        wizardTransferModalActions.findBankAccountInfoCheckoutLimit(a, function(a) {
            a.success && (wizardTransferModalController.setLimitState({
                name: "bankAccountInfoCheckoutLimit",
                value: moneyUtils.maskedStringToNumberMoney(a.dailyLimit)
            }),
            wizardTransferModalController.setLimitState({
                name: "bankAccountInfoCheckoutLimitRemainingDailyLimit",
                value: moneyUtils.maskedStringToNumberMoney(a.remainingDailyLimit)
            }))
        })
    }
    ;
    this.calculateNextStep = function() {
        return wizardTransferSummaryStep.reference
    }
    ;
    this.calculatePreviousStep = function() {
        return wizardSelectOriginTypeStep.reference
    }
    ;
    this.reset = function() {
        K();
        L();
        g.iCheck("uncheck");
        g.filter(".js-init-checked").iCheck("check");
        c.removeAllFeedbackMessage()
    }
    ;
    var Q = function() {
        g.on("ifChecked", function() {
            c.removeAllFeedbackMessage();
            K();
            L();
            var a = H();
            PixTransactionOriginTypeEnum.isAddressKey(a) ? (h = PixTransactionOriginTypeEnum.ADDRESS_KEY,
            b.show(),
            k.hide(),
            wizardTransferModalController.nextStepButtonReference.attr("disabled", !0),
            f ? w.show() : w.hide()) : PixTransactionOriginTypeEnum.isManual(a) && (h = PixTransactionOriginTypeEnum.MANUAL,
            k.show(),
            b.hide(),
            f ? F.show() : F.hide(),
            J(),
            wizardTransferModalController.nextStepButtonReference.attr("disabled", !1))
        })
    }
      , H = function() {
        return g.filter(function() {
            return this.checked
        }).val()
    }
      , J = function() {
        D.on("change", function() {
            var a = k.find(".js-box-receiver-personal-info");
            G() ? a.hide() : a.show()
        })
    }
      , G = function() {
        return "true" == D.select2("val")
    }
      , U = function() {
        d.removeAllFeedbackMessage();
        wizardTransferModalStore.dispatch({
            type: "CLEAN_FEEDBACK_ERROR"
        });
        wizardTransferModalStore.dispatch({
            type: "ADD_FEEDBACK_ERROR_LIST",
            feedbackMessages: d.validateRequiredFields()
        });
        var a = wizardTransferModalStore.getState().wizardTransferModalConfig.feedbackMessages;
        if (0 < a.length)
            return d.showFeedbackMessage(a),
            !1;
        wizardTransferModalStore.getState().transferInfo.isValidateKey || wizardTransferModalStore.dispatch({
            type: "ADD_FEEDBACK_ERROR",
            message: "Chave inv\u00e1lida",
            reference: p
        });
        a = transferUtils.validateScheduledDate(r.val());
        a.error && wizardTransferModalStore.dispatch({
            type: "ADD_FEEDBACK_ERROR",
            message: a.message,
            reference: r
        });
        var c = dateUtils.isAfterToday(r.val())
          , a = b.find(".js-value")
          , e = moneyUtils.maskedStringToNumberMoney(a.val())
          , c = transferUtils.validateWizardPixTransactionValue(e, c);
        c.error && wizardTransferModalStore.dispatch({
            type: "ADD_FEEDBACK_ERROR",
            message: c.message,
            reference: a
        });
        a = wizardTransferModalStore.getState().wizardTransferModalConfig.feedbackMessages;
        if (0 == a.length)
            return !0;
        d.showFeedbackMessage(a);
        return !1
    }
      , R = function() {
        p.on("keyup", function() {
            a.reference.find(".js-value").val("");
            r.datepicker("setDate", new Date);
            n.val("");
            t.hide();
            l.hide();
            M();
            wizardTransferModalController.setState({
                name: "isValidateKey",
                value: !1
            });
            wizardTransferModalController.setState({
                name: "addressKeyType",
                value: ""
            });
            wizardTransferModalController.nextStepButtonReference.attr("disabled", !0)
        })
    }
      , S = function() {
        u.on("click", function() {
            wizardTransferModalStore.getState().transferInfo.isValidateKey || "" === p.val() || (c.removeAllFeedbackMessage(),
            q.disable(),
            a.reference.find(".js-icarus-card-pix-manual").iCheck("disable"),
            N())
        })
    }
      , T = function() {
        l.on("ifChecked", function() {
            var a = m.filter(function() {
                return this.checked
            }).val();
            wizardTransferModalController.setState({
                name: "addressKeyType",
                value: a
            });
            N()
        })
    }
      , N = function() {
        t.hide();
        l.hide();
        M();
        c.loadStepInfo();
        var a = wizardTransferModalStore.getState().transferInfo.addressKeyType;
        if (transferUtils.isEquivalentToCpfAndPhone(p.val()) && !a)
            l.show(),
            wizardTransferModalController.nextStepButtonReference.attr("disabled", !0),
            I(),
            q.enable();
        else {
            if (!a)
                if (a = transferUtils.buildInputKey(p.val()),
                a.valid)
                    wizardTransferModalController.setState({
                        name: "addressKeyType",
                        value: a.pixKeyType
                    });
                else {
                    O("Chave inv\u00e1lida.", p);
                    wizardTransferModalController.nextStepButtonReference.attr("disabled", !0);
                    I();
                    q.enable();
                    return
                }
            a = wizardTransferModalStore.getState().transferInfo;
            wizardTransferModalActions.getKey(a, function(a) {
                a.success ? (wizardTransferModalController.setState({
                    name: "financialInstitutionName",
                    value: a.pixAddressKeyInfo.accountNumber.ispbCorporateName
                }),
                wizardTransferModalController.setState({
                    type: "SET_VALUE",
                    name: "name",
                    value: a.pixAddressKeyInfo.accountNumber.name
                }),
                wizardTransferModalController.setState({
                    type: "SET_VALUE",
                    name: "cpfCnpj",
                    value: a.pixAddressKeyInfo.accountNumber.cpfCnpj
                }),
                wizardTransferModalController.setState({
                    type: "SET_VALUE",
                    name: "personType",
                    value: a.pixAddressKeyInfo.accountNumber.personType
                }),
                wizardTransferModalController.setState({
                    type: "SET_VALUE",
                    name: "isValidateKey",
                    value: !0
                }),
                wizardTransferModalController.setState({
                    type: "SET_VALUE",
                    name: "bankAccountInfoId",
                    value: a.pixAddressKeyInfo.bankAccountInfoId
                }),
                t.show(),
                t.find(".js-ispb-name").val(wizardTransferModalStore.getState().transferInfo.financialInstitutionName),
                t.find(".js-pix-user-name").val(wizardTransferModalStore.getState().transferInfo.name),
                t.find(".js-pix-user-cpf-cnpj").val(wizardTransferModalStore.getState().transferInfo.cpfCnpj),
                a = "CPF",
                "JURIDICA" === wizardTransferModalStore.getState().transferInfo.personType && (a = "CNPJ"),
                t.find(".js-cpf-cnpj-pix-user").html(a),
                b.find(".js-value")[0].scrollIntoView(),
                wizardTransferModalController.nextStepButtonReference.attr("disabled", !1),
                c.removeAllFeedbackMessage()) : (O(a.message.text, p),
                wizardTransferModalController.nextStepButtonReference.attr("disabled", !0));
                I();
                q.enable()
            })
        }
    }
      , I = function() {
        a.reference.find(".js-icarus-card-pix-manual").iCheck("enable")
    }
      , O = function(a, b) {
        c.removeAllFeedbackMessage();
        wizardTransferModalStore.dispatch({
            type: "CLEAN_FEEDBACK_ERROR"
        });
        wizardTransferModalStore.dispatch({
            type: "ADD_FEEDBACK_ERROR",
            message: a ? a : "Chave inv\u00e1lida",
            reference: b
        });
        wizardTransferModalController.setState({
            name: "isValidateKey",
            value: !1
        });
        wizardTransferModalController.setState({
            name: "addressKeyType",
            value: ""
        });
        t.hide();
        a = wizardTransferModalStore.getState().wizardTransferModalConfig.feedbackMessages;
        c.showFeedbackMessage(a)
    }
      , L = function() {
        x.val("");
        A.val("");
        C.val("");
        B.val("");
        v.val("");
        E.val("");
        z.datepicker("setDate", new Date);
        pixIspbSelect2Controller.reset();
        y.select2("val", "");
        D.select2("val", "false");
        F.iCheck("uncheck");
        D.trigger("change")
    }
      , K = function() {
        p.val("");
        a.reference.find(".js-value").val("");
        r.datepicker("setDate", new Date);
        n.val("");
        t.hide();
        b.find(".js-save-bank-account-checkbox").iCheck("uncheck")
    }
      , M = function() {
        m.parent(".checked").find("input").iCheck("uncheck")
    }
}
function WizardTransferSummaryStep() {
    var a = this;
    this.init = function(b) {
        a.reference = b;
        new BaseWizardController(a.reference)
    }
    ;
    this.render = function() {
        wizardTransferModalController.hideCloseButton();
        wizardTransferModalController.showPreviousButton();
        wizardTransferModalController.hideNextButton();
        wizardTransferModalController.enableSubmitButton();
        wizardTransferModalController.showSubmitButton();
        c();
        wizardTransferModalController.showAuthorizationButtonsIfNecessary()
    }
    ;
    this.validate = function() {
        return !0
    }
    ;
    this.submitStep = function() {}
    ;
    this.calculateNextStep = function() {
        if (wizardTransferModalController.isTokenRequired())
            return wizardTransferCriticalActionStep.reference;
        if (wizardTransferModalController.isInAnalysis())
            return wizardPixTransactionInAnalysisStep.reference;
        var a = wizardTransferModalStore.getState().transferInfo.scheduledDate;
        return wizardTransferModalController.isScheduledTransaction(a) ? wizardPixScheduledTransactionAlertStep.reference : wizardTransferAlertStep.reference
    }
    ;
    this.calculatePreviousStep = function() {
        return wizardTransferModalStore.getState().transferInfo.toBankAccount ? wizardBankAccountTransferInfoStep.reference : wizardTransferReceiverInfoStep.reference
    }
    ;
    var c = function() {
        var b = a.reference.find(".js-pix-with-key-box").hide()
          , c = a.reference.find(".js-pix-without-key-box").hide()
          , g = wizardTransferModalStore.getState().transferInfo;
        a.reference.find(".js-pix-receiver-name-summary").html(g.name);
        a.reference.find(".js-pix-receiver-ispb-name-summary").html(g.financialInstitutionName);
        a.reference.find(".js-pix-value-amount").html(moneyUtils.getValueWithMonetarySymbol(g.value));
        var h = wizardTransferModalController.isScheduledTransaction(g.scheduledDate) ? " (Agendado)" : "";
        a.reference.find(".js-pix-scheduled-date").html(g.scheduledDate + h);
        a.reference.find(".js-pix-description").html(g.description);
        a.reference.find(".js-pix-receiver-cpf-cnpj-summary").html(e());
        g.pixKey ? (b.show(),
        a.reference.find(".js-pix-receiver-key-summary").html(g.pixKey)) : (c.show(),
        a.reference.find(".js-pix-receiver-account-type").html(g.typeName),
        a.reference.find(".js-pix-receiver-account-agency").html(g.agency),
        a.reference.find(".js-pix-receiver-account-account").html(g.account),
        a.reference.find(".js-pix-receiver-account-type").html(g.accountTypeName));
        g.bankAccountInfoId ? wizardTransferModalActions.getFee(g, function(a) {
            d(moneyUtils.maskedStringToNumberMoney(a.fee))
        }) : d(wizardTransferModalStore.getState().pixTransactionCheckoutLimitInfo.pixDebitFee);
        b = TransferTypeEnum.getMessage(g.transferType);
        a.reference.find(".js-transfer-type").html(b);
        a.reference.find(".js-summary-description-transfer-type").html(b)
    }
      , d = function(b) {
        a.reference.find(".js-transfer-fee").html(moneyUtils.getValueWithMonetarySymbol(b));
        b = moneyUtils.maskedStringToNumberMoney(wizardTransferModalStore.getState().transferInfo.value) + b;
        a.reference.find(".js-pix-debit-total-amount").html(moneyUtils.getValueWithMonetarySymbol(b))
    }
      , e = function() {
        var a = wizardTransferModalStore.getState().transferInfo;
        return PixTransactionOriginTypeEnum.isAddressKey(a.originType) || a.bankAccountInfoId ? a.cpfCnpj : formatter.formatCpfCnpj(a.cpfCnpj)
    }
}
function WizardTransferCriticalActionStep() {
    var a = this, c, d = new ButtonController, e, b = !1;
    this.init = function(f) {
        a.reference = f;
        d.buttonReference = a.reference.find(".js-btn-send-token");
        e = a.reference.find(".js-btn-resend-token");
        a.reset();
        c = new BaseWizardController(a.reference);
        c.setState = wizardTransferModalController.setState;
        b = a.reference.find(".js-authorization-device-type-is-mobile-app-token").data("value");
        b || (k(),
        g())
    }
    ;
    var k = function() {
        d.buttonReference.on("click", function(c) {
            c.preventDefault();
            b || (d.disable(),
            a.sendToken(null))
        })
    }
      , g = function() {
        e.off("click");
        e.on("click", function(a) {
            a.preventDefault();
            h()
        })
    };
    this.sendToken = function(a) {
        wizardTransferModalActions.requestToken({
            actions: wizardTransferModalStore.getState().transferInfo.criticalActionId
        }, function(b) {
            b.success ? (wizardTransferModalController.setState({
                name: "criticalActionGroupId",
                value: b.groupId
            }),
            f(b.groupId),
            a && a()) : (asaasMessagePrinter.show(b.messageHtml),
            d.enable(),
            wizardTransferModalController.showCriticalActionAlertIfNecessary())
        })
    }
    ;
    var h = function() {
        e.prop("disabled", !0);
        e.addClass("disabled");
        wizardTransferModalActions.resendToken({
            id: wizardTransferModalStore.getState().transferInfo.groupId
        }, function(a) {
            e.prop("disabled", !1);
            e.removeClass("disabled");
            asaasMessagePrinter.show(a.messageHtml)
        })
    }
      , f = function(b) {
        a.reference.find(".js-send-token-box").addClass("hide");
        a.reference.find(".js-confirm-token-box").removeClass("hide");
        b && wizardTransferModalController.setState({
            name: "groupId",
            value: b
        });
        wizardTransferModalController.enableSubmitButton();
        wizardTransferModalController.showCriticalActionAlertIfNecessary()
    };
    this.reset = function() {
        a.reference.find(".js-send-token-box").removeClass("hide");
        a.reference.find(".js-confirm-token-box").addClass("hide");
        d.oldDescription = "Enviar c\u00f3digo";
        d.enable();
        wizardTransferModalController.disableSubmitButton();
        a.reference.find(".js-token").val("")
    }
    ;
    this.validate = function() {
        c.removeAllFeedbackMessage();
        wizardTransferModalStore.dispatch({
            type: "CLEAN_FEEDBACK_ERROR"
        });
        wizardTransferModalStore.dispatch({
            type: "ADD_FEEDBACK_ERROR_LIST",
            feedbackMessages: c.validateRequiredFields()
        });
        var a = wizardTransferModalStore.getState().wizardTransferModalConfig.feedbackMessages;
        return 0 < a.length ? (c.showFeedbackMessage(a),
        !1) : !0
    }
    ;
    this.render = function() {
        c.removeAllFeedbackMessage();
        wizardTransferModalController.hideNextButton();
        wizardTransferModalController.hidePreviousButton();
        wizardTransferModalController.hideSubmitButton();
        wizardTransferModalController.disableSubmitButton();
        wizardTransferModalController.showAuthorizeLaterButton();
        wizardTransferModalController.showAuthorizeButton();
        a.reset();
        b && f(null)
    }
    ;
    this.submitStep = function() {
        c.loadStepInfo()
    }
    ;
    this.calculateNextStep = function() {
        if (wizardTransferModalController.isInAnalysis())
            return wizardPixTransactionInAnalysisStep.reference;
        var a = wizardTransferModalStore.getState().transferInfo.scheduledDate;
        return wizardTransferModalController.isScheduledTransaction(a) ? wizardPixScheduledTransactionAlertStep.reference : wizardTransferAlertStep.reference
    }
    ;
    this.calculatePreviousStep = function() {
        return wizardTransferSummaryStep.reference
    }
}
function WizardTransferAlertStep() {
    var a = this;
    this.init = function(c) {
        a.reference = c;
        new BaseWizardController(a.reference)
    }
    ;
    this.render = function() {
        wizardTransferModalController.hideCloseButton();
        wizardTransferModalController.hidePreviousButton();
        wizardTransferModalController.hideNextButton();
        wizardTransferModalController.hideSubmitButton();
        wizardTransferModalController.showFinishButton();
        wizardTransferModalController.hideAuthorizeButton();
        wizardTransferModalController.hideAuthorizeLaterButton();
        var c = wizardTransferModalStore.getState().transferInfo;
        TransferTypeEnum.isPix(c.transferType) ? (wizardTransferModalController.isScheduledTransaction(c.scheduledDate) && wizardTransferModalController.setModalTitle("Pix agendado"),
        a.reference.find(".js-pix-feedback").show(),
        a.reference.find(".js-credit-transfer-request-feedback").hide()) : (a.reference.find(".js-pix-feedback").hide(),
        a.reference.find(".js-credit-transfer-request-feedback").show(),
        a.reference.find(".js-estimated-debit-date").html(c.estimatedDebitDate))
    }
    ;
    this.validate = function() {
        return !0
    }
    ;
    this.submitStep = function() {}
    ;
    this.calculateNextStep = function() {
        return null
    }
    ;
    this.calculatePreviousStep = function() {
        return null
    }
}
function WizardTransferInAnalysisStep() {
    var a = this;
    this.init = function(c) {
        a.reference = c;
        new BaseWizardController(a.reference)
    }
    ;
    this.render = function() {
        wizardTransferModalController.hideCloseButton();
        wizardTransferModalController.hidePreviousButton();
        wizardTransferModalController.hideNextButton();
        wizardTransferModalController.hideSubmitButton();
        wizardTransferModalController.showFinishButton();
        wizardTransferModalController.hideAuthorizeButton();
        wizardTransferModalController.hideAuthorizeLaterButton()
    }
    ;
    this.validate = function() {
        return !0
    }
    ;
    this.submitStep = function() {}
    ;
    this.calculateNextStep = function() {
        return null
    }
    ;
    this.calculatePreviousStep = function() {
        return null
    }
}
function _defineProperty(a, c, d) {
    c in a ? Object.defineProperty(a, c, {
        value: d,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[c] = d;
    return a
}
var qrCodePixTransactionDefaultState = {}
  , qrCodePixTransactionInfo = function() {
    var a = buildReducerState(arguments, {})
      , c = arguments[1];
    switch (c.type) {
    case "SET_VALUE":
        return Object.assign({}, a, _defineProperty({}, c.name, c.value));
    case "RESET_STATE":
        return Object.assign({}, qrCodePixTransactionDefaultState);
    default:
        return a
    }
}
  , qrCodePixTransactionModalConfig = function() {
    var a = buildReducerState(arguments, {
        currentStep: null,
        feedbackMessages: []
    })
      , c = arguments[1];
    switch (c.type) {
    case "SET_CONFIG_VALUE":
        return Object.assign({}, a, _defineProperty({}, c.name, c.value));
    case "SET_CURRENT_STEP":
        return Object.assign({}, a, {
            currentStep: c.step
        });
    case "ADD_FEEDBACK_ERROR":
        var d = a.feedbackMessages;
        d.push({
            message: c.message,
            reference: c.reference
        });
        return Object.assign({}, a, {
            feedbackMessages: d
        });
    case "ADD_FEEDBACK_ERROR_LIST":
        return Object.assign({}, a, {
            feedbackMessages: a.feedbackMessages.concat(c.feedbackMessages)
        });
    case "CLEAN_FEEDBACK_ERROR":
        return Object.assign({}, a, {
            feedbackMessages: []
        });
    default:
        return a
    }
}
  , app = combineReducers({
    qrCodePixTransactionInfo: qrCodePixTransactionInfo,
    qrCodePixTransactionModalConfig: qrCodePixTransactionModalConfig
})
  , wizardQrCodePixTransactionModalStore = createStore(app);
function WizardQrCodePixTransactionModalController() {
    this.reference = $(".js-create-qr-code-transaction");
    var a = this.reference.find(".js-prev-step")
      , c = this.reference.find(".js-next-step")
      , d = this.reference.find(".js-btn-submit")
      , e = this.reference.find(".js-close")
      , b = this.reference.find(".js-btn-finish")
      , k = this.reference.find(".js-token")
      , g = !1
      , h = new BaseController
      , f = this;
    this.init = function() {
        wizardQrCodePixTransactionModalStore.dispatch({
            type: "SET_CONFIG_VALUE",
            name: "decodeQrCodeUrl",
            value: f.reference.data("decode-qrcode-url")
        });
        wizardQrCodePixTransactionModalStore.dispatch({
            type: "SET_CONFIG_VALUE",
            name: "requestTokenUrl",
            value: f.reference.data("request-token-url")
        });
        wizardQrCodePixTransactionModalStore.dispatch({
            type: "SET_CONFIG_VALUE",
            name: "resendTokenUrl",
            value: f.reference.data("resend-token-url")
        });
        wizardQrCodePixTransactionModalStore.dispatch({
            type: "SET_CONFIG_VALUE",
            name: "saveTransactionUrl",
            value: f.reference.data("save-transaction-url")
        });
        wizardQrCodePixTransactionModalStore.dispatch({
            type: "SET_CONFIG_VALUE",
            name: "getAuthorizationDeviceInfoUrl",
            value: f.reference.find(".js-critical-action-alert").data("url")
        });
        wizardQrCodePixTransactionModalActions = new WizardQrCodePixTransactionModalActions;
        wizardQrCodePixTransactionFormStepController = new WizardQrCodePixTransactionFormStepController;
        wizardQrCodePixTransactionFormStepController.init(f.reference.find(".js-form-step"));
        wizardQrCodePixTransactionSummaryStepController = new WizardQrCodePixTransactionSummaryStepController;
        wizardQrCodePixTransactionSummaryStepController.init(f.reference.find(".js-summary-step"));
        wizardQrCodePixTransactionCriticalActionStepController = new WizardQrCodePixTransactionCriticalActionStepController;
        wizardQrCodePixTransactionCriticalActionStepController.init(f.reference.find(".js-critical-action-confirm-token-step"));
        wizardQrCodePixTransactionFinishFeedbackStepController = new WizardQrCodePixTransactionFinishFeedbackStepController;
        wizardQrCodePixTransactionFinishFeedbackStepController.init(f.reference.find(".js-finish-feedback-step"));
        m();
        n();
        q();
        l();
        p();
        eventBinder.bindEnterKeypressOnInput(k, t);
        f.showCriticalActionAlertIfNecessary()
    }
    ;
    this.showPreviousButton = function() {
        a.show()
    }
    ;
    this.hidePreviousButton = function() {
        a.hide()
    }
    ;
    this.showNextButton = function() {
        c.show()
    }
    ;
    this.showCloseButton = function() {
        e.show()
    }
    ;
    this.hideCloseButton = function() {
        e.hide()
    }
    ;
    this.hideNextButton = function() {
        c.hide()
    }
    ;
    this.showSubmitButton = function() {
        d.show()
    }
    ;
    this.hideSubmitButton = function() {
        d.hide()
    }
    ;
    this.disableNextButton = function() {
        c.attr("disabled", !0)
    }
    ;
    this.enableNextButton = function() {
        c.attr("disabled", !1)
    }
    ;
    this.disableSubmitButton = function() {
        d.attr("disabled", !0)
    }
    ;
    this.enableSubmitButton = function() {
        d.attr("disabled", !1)
    }
    ;
    this.showFinishButton = function() {
        b.show()
    }
    ;
    this.open = function() {
        f.reset();
        g || l();
        f.reference.modal({
            backdrop: "static",
            keyboard: !1
        })
    }
    ;
    this.setState = function(a) {
        wizardQrCodePixTransactionModalStore.dispatch({
            type: "SET_VALUE",
            name: a.name,
            value: a.value
        })
    }
    ;
    this.reset = function() {
        wizardQrCodePixTransactionModalStore.dispatch({
            type: "RESET_STATE"
        });
        wizardQrCodePixTransactionFormStepController.reset()
    }
    ;
    this.showCriticalActionAlertIfNecessary = function() {
        wizardQrCodePixTransactionModalController.isTokenRequired() && $.get(wizardQrCodePixTransactionModalStore.getState().qrCodePixTransactionModalConfig.getAuthorizationDeviceInfoUrl, function(a) {
            g = a.isLocked;
            !0 === a.isLocked && (f.reference.find(".js-critical-action-alert").show(),
            f.reference.find(".js-modal-steps").hide(),
            f.reference.find(".js-modal-title").text("Autoriza\u00e7\u00f5es bloqueadas"),
            f.hideSubmitButton(),
            f.hideNextButton(),
            f.hidePreviousButton(),
            f.showCloseButton())
        })
    }
    ;
    var l = function() {
        f.changeStep(wizardQrCodePixTransactionFormStepController.reference);
        r("render")
    }
      , m = function() {
        a.on("click", function(a) {
            a.preventDefault();
            if (a = r("calculatePreviousStep"))
                f.changeStep(a),
                r("render")
        })
    }
      , n = function() {
        c.on("click", function(a) {
            a.preventDefault();
            u()
        })
    }
      , p = function() {
        d.off("click");
        d.on("click", function(a) {
            a.preventDefault();
            t()
        })
    }
      , t = function() {
        r("submitStep");
        if (r("validate")) {
            var a = new ButtonController;
            a.buttonReference = d;
            a.disable();
            var b = wizardQrCodePixTransactionModalStore.getState().qrCodePixTransactionInfo;
            wizardQrCodePixTransactionModalActions.saveTransaction(b, function(b) {
                b.success ? (f.setState({
                    name: "isInAnalysis",
                    value: b.isInAnalysis
                }),
                a.enable(),
                u()) : (a.enable(),
                asaasMessagePrinter.show(b.messageHtml))
            })
        }
    }
      , r = function(a) {
        var b;
        return (b = wizardQrCodePixTransactionModalStore.getState().qrCodePixTransactionModalConfig.currentStep.data("controller-name")) ? h.executeFunctionByName(b + "." + a, window) : !0
    }
      , u = function() {
        r("submitStep");
        if (r("validate")) {
            var a = r("calculateNextStep");
            a && (f.changeStep(a),
            r("render"))
        }
    }
      , q = function() {
        b.on("click", function(a) {
            a.preventDefault();
            a = new ButtonController;
            a.buttonReference = $(this);
            a.disable();
            refreshPage()
        })
    };
    this.changeStep = function(a) {
        var b = wizardQrCodePixTransactionModalStore.getState().qrCodePixTransactionModalConfig.currentStep;
        b && b.hide();
        wizardQrCodePixTransactionModalStore.dispatch({
            type: "SET_CURRENT_STEP",
            step: a
        });
        a.show()
    }
    ;
    this.isTokenRequired = function() {
        return !0 === this.reference.find(".js-has-critical-action-enabled").data("value")
    }
}
var wizardQrCodePixTransactionModalController, wizardQrCodePixTransactionModalActions, wizardQrCodePixTransactionFormStepController, wizardQrCodePixTransactionSummaryStepController, wizardQrCodePixTransactionCriticalActionStepController, wizardQrCodePixTransactionFinishFeedbackStepController;
$(document).ready(function() {
    wizardQrCodePixTransactionModalController = new WizardQrCodePixTransactionModalController;
    wizardQrCodePixTransactionModalController.init()
});
function WizardQrCodePixTransactionModalActions() {
    this.decodeQrCode = function(a, c) {
        var d = wizardQrCodePixTransactionModalStore.getState().qrCodePixTransactionModalConfig.decodeQrCodeUrl;
        $.get(d, a).done(function(a) {
            c(a)
        })
    }
    ;
    this.requestToken = function(a, c) {
        var d = wizardQrCodePixTransactionModalStore.getState().qrCodePixTransactionModalConfig.requestTokenUrl;
        $.post(d, a).done(function(a) {
            c(a)
        })
    }
    ;
    this.resendToken = function(a, c) {
        var d = wizardQrCodePixTransactionModalStore.getState().qrCodePixTransactionModalConfig.resendTokenUrl;
        $.post(d, a).done(function(a) {
            c(a)
        })
    }
    ;
    this.saveTransaction = function(a, c) {
        var d = wizardQrCodePixTransactionModalStore.getState().qrCodePixTransactionModalConfig.saveTransactionUrl;
        $.post(d, a).done(function(a) {
            c(a)
        })
    }
}
function WizardQrCodePixTransactionFormStepController() {
    var a = this, c, d, e, b, k;
    this.init = function(p) {
        a.reference = p;
        c = new BaseWizardController(this.reference);
        c.setState = wizardQrCodePixTransactionModalController.setState;
        e = a.reference.find(".js-qr-code-info");
        d = a.reference.find(".js-payload-input");
        b = e.find(".js-net-value");
        k = e.find(".js-change-value");
        g()
    }
    ;
    this.render = function() {
        wizardQrCodePixTransactionModalController.hidePreviousButton();
        wizardQrCodePixTransactionModalController.showCloseButton();
        wizardQrCodePixTransactionModalController.showNextButton();
        wizardQrCodePixTransactionModalController.hideSubmitButton();
        f(d.val()) || wizardQrCodePixTransactionModalController.disableNextButton()
    }
    ;
    this.validate = function() {
        c.removeAllFeedbackMessage();
        wizardQrCodePixTransactionModalStore.dispatch({
            type: "CLEAN_FEEDBACK_ERROR"
        });
        wizardQrCodePixTransactionModalStore.dispatch({
            type: "ADD_FEEDBACK_ERROR_LIST",
            feedbackMessages: c.validateRequiredFields()
        });
        var e = moneyUtils.maskedStringToNumberMoney(a.reference.find(".js-customer-available-daily-limit").val())
          , g = moneyUtils.maskedStringToNumberMoney(a.reference.find(".js-pix-remaining-limit-per-period").val())
          , h = moneyUtils.maskedStringToNumberMoney(a.reference.find(".js-pix-limit-per-transaction").val())
          , l = moneyUtils.maskedStringToNumberMoney(a.reference.find(".js-customer-balance").val())
          , q = moneyUtils.maskedStringToNumberMoney(a.reference.find(".js-pix-debit-fee").val())
          , n = a.reference.find(".js-is-daytime").data("value")
          , x = wizardQrCodePixTransactionModalStore.getState().qrCodePixTransactionInfo.value
          , e = transferUtils.validatePixTransactionValue(h, g, e, l, q, n, x);
        e.error && wizardQrCodePixTransactionModalStore.dispatch({
            type: "ADD_FEEDBACK_ERROR",
            message: e.message,
            reference: b
        });
        wizardQrCodePixTransactionModalStore.getState().qrCodePixTransactionInfo.qrCodeInfo.cashValueFinality === PixTransactionCashValueFinality.CHANGE && 0 >= wizardQrCodePixTransactionModalStore.getState().qrCodePixTransactionInfo.changeValue && wizardQrCodePixTransactionModalStore.dispatch({
            type: "ADD_FEEDBACK_ERROR",
            message: "Informe um valor maior ou igual a " + moneyUtils.getValueWithMonetarySymbol(0),
            reference: k
        });
        e = wizardQrCodePixTransactionModalStore.getState().qrCodePixTransactionModalConfig.feedbackMessages;
        return 0 < e.length ? (c.showFeedbackMessage(e),
        !1) : f(d.val()) ? !0 : (m(),
        !1)
    }
    ;
    this.submitStep = function() {
        c.loadStepInfo();
        wizardQrCodePixTransactionModalController.setState({
            name: "value",
            value: moneyUtils.maskedStringToNumberMoney(b.val())
        });
        wizardQrCodePixTransactionModalController.setState({
            name: "changeValue",
            value: moneyUtils.maskedStringToNumberMoney(k.val())
        })
    }
    ;
    this.calculateNextStep = function() {
        return wizardQrCodePixTransactionSummaryStepController.reference
    }
    ;
    this.calculatePreviousStep = function() {
        return null
    }
    ;
    this.reset = function() {
        e.hide();
        wizardQrCodePixTransactionModalStore.dispatch({
            type: "CLEAN_FEEDBACK_ERROR"
        });
        c.removeAllFeedbackMessage();
        d.val("");
        b.val("");
        a.reference.find(".js-message").val("");
        a.reference.find(".js-scheduled-date").datepicker("setDate", new Date);
        e.find(".js-scheduled-date").datepicker("setEndDate", null)
    }
    ;
    var g = function() {
        d.on("input", function(a) {
            "insertFromPaste" === a.originalEvent.inputType && h()
        });
        d.on("blur", h)
    }
      , h = performanceUtils.debounce(function() {
        if (d.val() !== wizardQrCodePixTransactionModalStore.getState().qrCodePixTransactionInfo.payload)
            if (wizardQrCodePixTransactionModalController.setState({
                name: "payload",
                value: d.val()
            }),
            e.hide(),
            wizardQrCodePixTransactionModalStore.dispatch({
                type: "CLEAN_FEEDBACK_ERROR"
            }),
            c.removeAllFeedbackMessage(),
            f(d.val())) {
                wizardQrCodePixTransactionModalController.enableNextButton();
                var a = {
                    payload: d.val()
                };
                wizardQrCodePixTransactionModalActions.decodeQrCode(a, l)
            } else
                m()
    }, 250)
      , f = function(a) {
        if (!a || stringUtils.isEmpty(a))
            return !1;
        a = a.toLowerCase();
        return 0 < !a.indexOf("br.gov.bcb.pix") || !a.startsWith("0002") ? !1 : !0
    }
      , l = function(a) {
        if (a.success) {
            wizardQrCodePixTransactionModalController.setState({
                name: "qrCodeInfo",
                value: a.qrCodeInfo
            });
            e.show();
            e.find(".js-receiver-name").val(a.qrCodeInfo.receiver.name);
            e.find(".js-receiver-cpf-cnpj").val(a.qrCodeInfo.receiver.cpfCnpj);
            e.find(".js-receiver-institution-name").val(a.qrCodeInfo.receiver.institutionName);
            e.find(".js-description").html(a.qrCodeInfo.description);
            a.qrCodeInfo.expirationDate ? (e.find(".js-expiration-date-control-group").show(),
            e.find(".js-expiration-date").val(a.qrCodeInfo.expirationDate),
            e.find(".js-scheduled-date").datepicker("setEndDate", a.qrCodeInfo.expirationDate)) : e.find(".js-expiration-date-control-group").hide();
            n(b, a.qrCodeInfo.canBePaidWithDifferentValue, a.qrCodeInfo.netValue);
            var c = e.find(".js-net-value-label")
              , d = e.find(".js-change-value-control-group");
            e.find(".js-change-value-control-group").hide();
            k.val("");
            a.qrCodeInfo.cashValueFinality ? a.qrCodeInfo.cashValueFinality === PixTransactionCashValueFinality.WITHDRAWAL ? c.html("Valor de Saque") : (c.html("Valor da compra"),
            d.show(),
            n(k, a.qrCodeInfo.canModifyCashValue, a.qrCodeInfo.cashValue),
            c = moneyUtils.maskedStringToNumberMoney(a.qrCodeInfo.netValue) - moneyUtils.maskedStringToNumberMoney(a.qrCodeInfo.cashValue),
            n(b, a.qrCodeInfo.canBePaidWithDifferentValue, moneyUtils.getValueWithoutMonetarySymbol(c))) : c.html("Valor final");
            wizardQrCodePixTransactionModalController.setState({
                name: "cashValueFinality",
                value: a.qrCodeInfo.cashValueFinality
            })
        } else
            m()
    }
      , m = function() {
        wizardQrCodePixTransactionModalStore.dispatch({
            type: "CLEAN_FEEDBACK_ERROR"
        });
        c.removeAllFeedbackMessage();
        wizardQrCodePixTransactionModalStore.dispatch({
            type: "ADD_FEEDBACK_ERROR",
            message: "C\u00f3digo inv\u00e1lido",
            reference: d
        });
        var a = wizardQrCodePixTransactionModalStore.getState().qrCodePixTransactionModalConfig.feedbackMessages;
        c.showFeedbackMessage(a);
        wizardQrCodePixTransactionModalController.disableNextButton()
    }
      , n = function(a, b, c) {
        b ? (a.closest(".js-value-prepend").addClass("prepend-currency"),
        a.removeAttr("readOnly"),
        a.val(c)) : (a.closest(".js-value-prepend").removeClass("prepend-currency"),
        a.attr("readOnly", !0),
        a.val(moneyUtils.getValueWithMonetarySymbol(c)))
    }
}
function WizardQrCodePixTransactionSummaryStepController() {
    var a = this, c, d;
    this.init = function(e) {
        a.reference = e;
        new BaseWizardController(a.reference);
        c = a.reference.find(".js-payer-info");
        d = a.reference.find(".js-payment-info")
    }
    ;
    this.render = function() {
        wizardQrCodePixTransactionModalController.hideCloseButton();
        wizardQrCodePixTransactionModalController.showPreviousButton();
        wizardQrCodePixTransactionModalController.isTokenRequired() ? (wizardQrCodePixTransactionModalController.showNextButton(),
        wizardQrCodePixTransactionModalController.hideSubmitButton()) : (wizardQrCodePixTransactionModalController.hideNextButton(),
        wizardQrCodePixTransactionModalController.enableSubmitButton(),
        wizardQrCodePixTransactionModalController.showSubmitButton());
        var e = wizardQrCodePixTransactionModalStore.getState().qrCodePixTransactionInfo;
        a.reference.find(".js-receiver-name").html(e.qrCodeInfo.receiver.name);
        a.reference.find(".js-receiver-cpf-cnpj").html(e.qrCodeInfo.receiver.cpfCnpj);
        a.reference.find(".js-receiver-institution-name").html(e.qrCodeInfo.receiver.institutionName);
        a.reference.find(".js-value").html(moneyUtils.getValueWithMonetarySymbol(e.value));
        var b = e.scheduledDate
          , k = transferUtils.isScheduledTransaction(b) ? " (Agendado)" : "";
        a.reference.find(".js-scheduled-date").html(b + k);
        a.reference.find(".js-message").html(e.message);
        b = moneyUtils.maskedStringToNumberMoney(e.pixDebitFee);
        e.qrCodeInfo.cashValueFinality && (b = moneyUtils.maskedStringToNumberMoney(e.pixDebitWithCashValueFee));
        a.reference.find(".js-pix-debit-fee-label").html(moneyUtils.getValueWithMonetarySymbol(b));
        b = e.value + b;
        e.qrCodeInfo.cashValueFinality === PixTransactionCashValueFinality.CHANGE && (b += e.changeValue);
        a.reference.find(".js-pix-debit-total-amount").html(moneyUtils.getValueWithMonetarySymbol(b));
        e.qrCodeInfo.payer ? (c.show(),
        c.find(".js-payer-name").html(e.qrCodeInfo.payer.name),
        c.find(".js-payer-cpf-cnpj").html(e.qrCodeInfo.payer.cpfCnpj)) : c.hide();
        e.qrCodeInfo.paymentInfo ? (d.find(".js-original-value").html(e.qrCodeInfo.paymentInfo.value),
        d.find(".js-discount-value").html(e.qrCodeInfo.paymentInfo.discountValue),
        d.find(".js-interest-value").html(e.qrCodeInfo.paymentInfo.interestValue),
        d.find(".js-fine-value").html(e.qrCodeInfo.paymentInfo.fineValue),
        d.show()) : d.hide();
        e.qrCodeInfo.expirationDate ? (a.reference.find(".js-expiration-date-control-group").show(),
        d.find(".js-expiration-date").html(e.qrCodeInfo.expirationDate)) : a.reference.find(".js-expiration-date-control-group").hide();
        a.reference.find(".js-change-value-control-group").hide();
        e.qrCodeInfo.cashValueFinality ? e.qrCodeInfo.cashValueFinality === PixTransactionCashValueFinality.WITHDRAWAL ? a.reference.find(".js-value-label").html("Valor de Saque") : (a.reference.find(".js-value-label").html("Valor da compra"),
        a.reference.find(".js-change-value-control-group").show(),
        a.reference.find(".js-change-value").html(moneyUtils.getValueWithMonetarySymbol(e.changeValue))) : a.reference.find(".js-value-label").html("Valor total")
    }
    ;
    this.validate = function() {
        return !0
    }
    ;
    this.submitStep = function() {}
    ;
    this.calculateNextStep = function() {
        return wizardQrCodePixTransactionModalController.isTokenRequired() ? wizardQrCodePixTransactionCriticalActionStepController.reference : wizardQrCodePixTransactionFinishFeedbackStepController.reference
    }
    ;
    this.calculatePreviousStep = function() {
        return wizardQrCodePixTransactionFormStepController.reference
    }
}
function WizardQrCodePixTransactionCriticalActionStepController() {
    var a = this, c, d = new ButtonController, e, b = !1;
    this.init = function(f) {
        a.reference = f;
        d.buttonReference = a.reference.find(".js-btn-send-token");
        e = a.reference.find(".js-btn-resend-token");
        a.reset();
        c = new BaseWizardController(a.reference);
        c.setState = wizardQrCodePixTransactionModalController.setState;
        b = a.reference.find(".js-authorization-device-type-is-mobile-app-token").data("value");
        b || (k(),
        g());
        h()
    }
    ;
    var k = function() {
        d.buttonReference.on("click", function(a) {
            a.preventDefault();
            f()
        })
    }
      , g = function() {
        e.on("click", function(a) {
            a.preventDefault();
            l()
        })
    }
      , h = function() {
        a.reference.find(".js-token").on("change", function(b) {
            b.preventDefault();
            wizardQrCodePixTransactionModalController.enableSubmitButton();
            wizardQrCodePixTransactionModalController.setState({
                name: "token",
                value: a.reference.find(".js-token").val()
            })
        })
    }
      , f = function() {
        d.disable();
        wizardQrCodePixTransactionModalActions.requestToken(wizardQrCodePixTransactionModalStore.getState().qrCodePixTransactionInfo, function(b) {
            b.success ? (b = b.groupId,
            a.reference.find(".js-send-token-box").addClass("hide"),
            a.reference.find(".js-confirm-token-box").removeClass("hide"),
            wizardQrCodePixTransactionModalController.setState({
                name: "groupId",
                value: b
            }),
            wizardQrCodePixTransactionModalController.enableSubmitButton()) : (asaasMessagePrinter.show(b.messageHtml),
            d.enable());
            wizardQrCodePixTransactionModalController.showCriticalActionAlertIfNecessary()
        })
    }
      , l = function() {
        e.prop("disabled", !0);
        e.addClass("disabled");
        wizardQrCodePixTransactionModalActions.resendToken({
            id: wizardQrCodePixTransactionModalStore.getState().qrCodePixTransactionInfo.groupId
        }, function(a) {
            e.prop("disabled", !1);
            e.removeClass("disabled");
            asaasMessagePrinter.show(a.messageHtml)
        })
    };
    this.reset = function() {
        a.reference.find(".js-send-token-box").removeClass("hide");
        a.reference.find(".js-confirm-token-box").addClass("hide");
        d.oldDescription = "Enviar c\u00f3digo";
        d.enable();
        wizardQrCodePixTransactionModalController.disableSubmitButton();
        a.reference.find(".js-token").val("")
    }
    ;
    this.validate = function() {
        c.removeAllFeedbackMessage();
        wizardQrCodePixTransactionModalStore.dispatch({
            type: "CLEAN_FEEDBACK_ERROR"
        });
        wizardQrCodePixTransactionModalStore.dispatch({
            type: "ADD_FEEDBACK_ERROR_LIST",
            feedbackMessages: c.validateRequiredFields()
        });
        var a = wizardQrCodePixTransactionModalStore.getState().qrCodePixTransactionModalConfig.feedbackMessages;
        return 0 < a.length ? (c.showFeedbackMessage(a),
        !1) : !0
    }
    ;
    this.render = function() {
        c.removeAllFeedbackMessage();
        wizardQrCodePixTransactionModalController.hideNextButton();
        wizardQrCodePixTransactionModalController.showSubmitButton();
        wizardQrCodePixTransactionModalController.disableSubmitButton();
        a.reset();
        b && f()
    }
    ;
    this.submitStep = function() {
        c.loadStepInfo()
    }
    ;
    this.calculateNextStep = function() {
        return wizardQrCodePixTransactionFinishFeedbackStepController.reference
    }
    ;
    this.calculatePreviousStep = function() {
        return wizardQrCodePixTransactionSummaryStepController.reference
    }
}
function WizardQrCodePixTransactionFinishFeedbackStepController() {
    var a = this;
    this.init = function(c) {
        a.reference = c;
        new BaseWizardController(a.reference)
    }
    ;
    this.render = function() {
        wizardQrCodePixTransactionModalController.hideCloseButton();
        wizardQrCodePixTransactionModalController.hidePreviousButton();
        wizardQrCodePixTransactionModalController.hideNextButton();
        wizardQrCodePixTransactionModalController.hideSubmitButton();
        wizardQrCodePixTransactionModalController.showFinishButton();
        a.reference.find(".js-in-analysis-feedback").hide();
        a.reference.find(".js-scheduled-feedback").hide();
        a.reference.find(".js-success-feedback").hide();
        wizardQrCodePixTransactionModalStore.getState().qrCodePixTransactionInfo.isInAnalysis ? a.reference.find(".js-in-analysis-feedback").show() : transferUtils.isScheduledTransaction(wizardQrCodePixTransactionModalStore.getState().qrCodePixTransactionInfo.scheduledDate) ? a.reference.find(".js-scheduled-feedback").show() : a.reference.find(".js-success-feedback").show()
    }
    ;
    this.validate = function() {
        return !0
    }
    ;
    this.submitStep = function() {}
    ;
    this.calculateNextStep = function() {
        return null
    }
    ;
    this.calculatePreviousStep = function() {
        return null
    }
}
function ScheduledTransactionCancelModalController() {
    this.reference = $(".js-cancel-scheduled-transaction-modal");
    var a = this, c = a.reference.find(".js-confirm-cancellation"), d = new ButtonController, e;
    this.init = function() {
        b()
    }
    ;
    this.open = function(b) {
        e = b;
        a.reference.modal()
    }
    ;
    var b = function() {
        c.on("click", function(a) {
            a.preventDefault();
            k()
        })
    }
      , k = function() {
        var b = a.reference.find(".js-cancel-scheduled-transaction-url").val();
        d.buttonReference = c;
        d.disable();
        $.post(b, {
            id: e
        }, function(a) {
            a.success ? refreshPage($.param({
                messageType: a.message.type,
                message: a.message.text
            })) : (asaasMessagePrinter.show(a.messageHtml),
            d.enable())
        })
    }
}
var scheduledTransactionCancelModalController;
$(document).ready(function() {
    scheduledTransactionCancelModalController = new ScheduledTransactionCancelModalController;
    scheduledTransactionCancelModalController.init()
});
function ScheduledTransactionOpenFinanceCancelModalController() {
    this.reference = $(".js-scheduled-transaction-open-finance-cancel-modal");
    var a = this, c = a.reference.find(".js-redirect-to-show-consent"), d;
    this.init = function() {
        e()
    }
    ;
    this.open = function(b) {
        a.reference.modal();
        d = b
    }
    ;
    var e = function() {
        c.on("click", function(b) {
            b.preventDefault();
            b = a.reference.find(".js-redirect-to-show-consent-url").val();
            window.location.href = b + "/" + d
        })
    }
}
var scheduledTransactionOpenFinanceCancelModalController;
$(document).ready(function() {
    scheduledTransactionOpenFinanceCancelModalController = new ScheduledTransactionOpenFinanceCancelModalController;
    scheduledTransactionOpenFinanceCancelModalController.init()
});
function PixTransactionIndexController() {
    this.reference = $(".js-pix-transaction-index");
    var a = this;
    this.init = function() {
        c();
        d();
        e();
        var a = (new URL(document.location)).searchParams;
        if (a && "true" === a.get("shouldOpenCreatePixTransactionModal"))
            $(window).on("load", wizardTransferModalController.open)
    }
    ;
    var c = function() {
        a.reference.find(".js-pix-transaction-button").on("click", function(a) {
            a.preventDefault();
            a.stopImmediatePropagation();
            wizardTransferModalController.open()
        })
    }
      , d = function() {
        a.reference.find(".js-qr-code-pix-transaction-button").on("click", function(a) {
            a.preventDefault();
            a.stopImmediatePropagation();
            wizardQrCodePixTransactionModalController.open()
        })
    }
      , e = function() {
        a.reference.find(".js-scheduled-pix-transaction-table tr").each(function(a, c) {
            var d = $(c).data("id")
              , e = $(c).data("external-debit-consent-id");
            $(c).find(".js-btn-cancel-scheduled-transaction").on("click", function(a) {
                a.preventDefault();
                a.stopImmediatePropagation();
                e ? scheduledTransactionOpenFinanceCancelModalController.open(e) : scheduledTransactionCancelModalController.open(d)
            })
        })
    }
}
var pixTransactionIndexController;
$(document).ready(function() {
    pixTransactionIndexController = new PixTransactionIndexController;
    pixTransactionIndexController.init()
});
function CriticalActionAuthorizationModalController() {
    var a = this;
    a.authorizationModalReference;
    a.authorizeLaterModalReference;
    a.lockedDeviceWarningModalReference;
    var c, d = !1, e, b = !1, k, g, h;
    this.init = function() {
        a.authorizationModalReference = $("#critical-action-authorization-modal");
        a.authorizeLaterModalReference = $("#authorize-critical-action-later-modal");
        a.lockedDeviceWarningModalReference = $("#locked-device-warning-modal");
        h = a.authorizationModalReference.find(".feedback-error-message");
        c = "true" == $("#show-critical-list").val();
        e = $("#authorization-cookie-name").val();
        a.authorizationModalReference.on("shown.bs.modal", function() {
            c && browserUtils.setCookieHoursDefault(e, !0, 4)
        });
        a.lockedDeviceWarningModalReference.on("shown.bs.modal", function() {
            c && browserUtils.setCookieHoursDefault(e, !0, 4)
        });
        "true" === a.lockedDeviceWarningModalReference.attr("data-authorization-device-is-locked") ? modalController.showModal(a.lockedDeviceWarningModalReference) : 0 != a.authorizationModalReference.length && (g = a.authorizationModalReference.find(".critical-action-type").html(),
        k = new RemainingAuthorizationAttemptsController(a.authorizationModalReference.find(".remaining-authorization-attempts-message")),
        a.authorizationModalReference.find(".btn-send-token").on("click", l),
        a.authorizationModalReference.find(".btn-delete").on("click", m),
        a.authorizationModalReference.find(".btn-authorize").on("click", p),
        a.authorizationModalReference.find(".btn-resend-token").on("click", t),
        a.authorizationModalReference.find(".js-mobile-app-token-authorize-button").on("click", r),
        a.authorizationModalReference.find(".open-authorize-later-modal").on("click", w),
        a.criticalActionsItemReference = a.authorizationModalReference.find(".critical-events li.item"),
        a.authorizationModalReference.on("hidden", function() {
            b || w()
        }),
        a.authorizeLaterModalReference.on("hidden", function() {
            d || f()
        }),
        a.authorizeLaterModalReference.find(".back-to-authorization-modal").on("click", x),
        a.authorizeLaterModalReference.find(".authorize-later").on("click", function() {
            var a = new ButtonController;
            a.buttonReference = $(this);
            a.disable();
            f()
        }),
        y(),
        a.authorizeLaterModalReference.modal("hide"),
        modalController.showModal(a.authorizationModalReference),
        E(),
        z(),
        C(),
        n())
    }
    ;
    var f = function() {
        refreshPage($.param({
            message: a.authorizeLaterModalReference.find(".authorization-is-required-warning").html(),
            messageType: "warning"
        }))
    }
      , l = function() {
        var b = new ButtonController;
        b.buttonReference = $(this);
        b.disable();
        var c = v();
        y();
        $.post($(this).attr("data-url"), {
            actions: c.toString()
        }, function(c) {
            b.enable();
            c.success ? (a.authorizationModalReference.find(".btn-authorize").attr("data-group-id", c.groupId),
            a.authorizationModalReference.find(".send-token-box").hide(),
            a.authorizationModalReference.find(".validate-token-box").show(),
            a.authorizationModalReference.find("#authorization-token").focus()) : h.html(c.message.text).show()
        })
    }
      , m = function() {
        var a = new ButtonController;
        a.buttonReference = $(this);
        a.disable();
        y();
        var b = v();
        $.post($(this).attr("data-url"), {
            actions: b.toString()
        }, function(b) {
            a.enable();
            b.success ? refreshPage($.param({
                message: b.message.text,
                messageType: b.message.type
            }), !0) : h.html(b.message.text).show()
        })
    }
      , n = function() {
        a.authorizationModalReference.find("input[name='authorizationToken']").on("keypress", function(b) {
            13 == b.which && (b.preventDefault(),
            a.authorizationModalReference.find(".btn-authorize").trigger("click"))
        })
    }
      , p = function() {
        var b = new ButtonController;
        b.buttonReference = $(this);
        b.disable();
        $.post($(this).attr("data-url"), {
            id: a.authorizationModalReference.find(".btn-authorize").attr("data-group-id"),
            authorizationToken: a.authorizationModalReference.find("#authorization-token").val()
        }, function(c) {
            c.success ? c.authorized ? q(c) : c.maxAttemptsExceeded ? u() : (b.enable(),
            a.authorizationModalReference.find("#authorization-token").addClass("invalid"),
            k.setRemainingAuthorizationAttempts(c.remainingAuthorizationAttempts)) : (c.messageHtml && asaasMessagePrinter.show(c.messageHtml),
            b.enable())
        })
    }
      , t = function() {
        a.authorizationModalReference.find(".resend-token-state").hide();
        a.authorizationModalReference.find(".resend-token-box .sending").show();
        $.post($(this).attr("data-url"), {
            id: a.authorizationModalReference.find(".btn-authorize").attr("data-group-id")
        }, function(b) {
            b.success && (a.authorizationModalReference.find(".resend-token-state").hide(),
            a.authorizationModalReference.find(".resend-token-box .sent").show(),
            setTimeout(function() {
                a.authorizationModalReference.find(".resend-token-state").hide();
                a.authorizationModalReference.find(".resend-token-box .btn-resend-token").show()
            }, 3E3))
        })
    }
      , r = function() {
        var b = new ButtonController;
        b.buttonReference = $(this);
        b.disable();
        var c = a.authorizationModalReference.find(".js-mobile-app-token-input")
          , d = $(this).attr("data-url")
          , e = {
            actionList: v().toString(),
            authorizationToken: c.val()
        };
        $.post(d, e, function(a) {
            a.success ? a.authorized ? q(a) : a.maxAttemptsExceeded ? u() : (b.enable(),
            c.addClass("has-error-message"),
            k.setRemainingAuthorizationAttempts(a.remainingAuthorizationAttempts)) : b.enable()
        })
    }
      , u = function() {
        b = !0;
        a.authorizationModalReference.modal("hide");
        a.lockedDeviceWarningModalReference.modal()
    }
      , q = function(b) {
        if (c)
            refreshPage($.param({
                message: b.message.text,
                messageType: b.message.type
            }), !0);
        else {
            var d = {};
            d.message = a.authorizationModalReference.find(".authorization-successful-message").html();
            d.messageType = "success";
            b.authorizationSuccessfulMessage && (d.message = b.authorizationSuccessfulMessage.text,
            d.messageType = b.authorizationSuccessfulMessage.type);
            if ("BANK_ACCOUNT_INSERT" == g || "BANK_ACCOUNT_UPDATE" == g || "BANK_ACCOUNT_DELETE" == g)
                d.tab = "information",
                d.informationTab = "bank-account";
            refreshPage($.param(d))
        }
    }
      , w = function() {
        d = !1;
        a.authorizationModalReference.modal("hide");
        a.authorizeLaterModalReference.modal()
    }
      , x = function() {
        d = !0;
        y();
        a.authorizeLaterModalReference.modal("hide");
        a.authorizationModalReference.modal()
    }
      , E = function() {
        a.criticalActionsItemReference.find(".box-critical-action-type").on("click", function() {
            $(this).toggleClass("open");
            $(this).parent().find(".critical-events-details").toggle()
        })
    }
      , z = function() {
        a.criticalActionsItemReference.find("input[name='criticalActionType']").on("click", function() {
            var a = $(this).prop("checked");
            $(this).parent().find(".critical-events-details input[name='criticalAction']").prop("checked", a);
            A()
        })
    }
      , C = function() {
        a.criticalActionsItemReference.find("input[name='criticalAction']").on("click", function() {
            A()
        })
    }
      , A = function() {
        var b = a.criticalActionsItemReference.find("input[name='criticalAction']:checked").size();
        a.authorizationModalReference.find(".critical-action-size").html(b);
        0 == b ? (a.authorizationModalReference.find(".btn-send-token").attr("disabled", "disabled"),
        a.authorizationModalReference.find(".btn-delete").attr("disabled", "disabled")) : (a.authorizationModalReference.find(".btn-send-token").removeAttr("disabled"),
        a.authorizationModalReference.find(".btn-delete").removeAttr("disabled"))
    }
      , v = function() {
        if (!c)
            return a.authorizationModalReference.find(".js-critical-action-id").val();
        var b = []
          , d = a.authorizationModalReference.find("form[name='critical-action']").serializeArray();
        $.each(d, function(a, c) {
            "criticalAction" == c.name && b.push($(c).attr("value"))
        });
        return b
    }
      , y = function() {
        h.html("").hide()
    }
}
var criticalActionAuthorizationModalController;
$(document).ready(function() {
    criticalActionAuthorizationModalController = new CriticalActionAuthorizationModalController;
    criticalActionAuthorizationModalController.init()
});
