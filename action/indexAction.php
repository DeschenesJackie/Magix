<?php
	require_once("action/CommonAction.php");

	class indexAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {
			if (isset($_SESSION["key"])) {
				header("location:lobby.php");
			}

			$retour = [];
			$data = [];

			if (!empty($_COOKIE["username"])) {
				$retour["username"]= $_COOKIE["username"];
			}

			if (isset($_POST["username"]) && isset($_POST["password"])) {
				$data["username"] = $_POST["username"];
				$data["password"] = $_POST["password"];

				$result = parent::callAPI("signin", $data);

				if ($result == "INVALID_USERNAME_PASSWORD") {
					$retour["erreur"] = $result;
					// err
				}
				else {
					// Pour voir les informations retournées : var_dump($result);exit;
					setcookie("username", $_POST["username"], time() + 7200);
					$key = $result->key;
					$_SESSION["key"] = $key;
					$retour["isConnected"] = true;
				}
			}



			return $retour;
		}
	}